import FeedBack from '@/components/FeedBack'
import { useAuth } from '@/lib/auth'
import { createFeedback } from '@/lib/db'
import { getAllFeedBack, getAllSites } from '@/lib/db-admin'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

const FeedbackPage = ({ initialFeedBack }) => {
  const auth = useAuth()
  const router = useRouter()
  const inputEl = useRef(null)
  const [allFeedBack, setAllFeedBack] = useState(initialFeedBack)

  const handleSubmit = e => {
    e.preventDefault()

    const newFeedBack = {
      author: auth.user.name,
      authorID: auth.user.uid,
      siteID: router.query.siteID,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: 'pending'
    }

    setAllFeedBack([newFeedBack, ...allFeedBack])

    createFeedback(newFeedBack)
    inputEl.current.value = ''
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxW="700px"
      margin="0 auto"
    >
      {auth.user && (
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl my={8}>
            <FormLabel htmlFor="comment">Comment</FormLabel>
            <Input autoComplete="off" ref={inputEl} id="comment" placeholder="Leave a comment" />
          </FormControl>
          <Button type="submit" mt={4}>
            Add Comment
          </Button>
        </Box>
      )}
      {allFeedBack.map(f => (
        <>
          <FeedBack key={f.id + '' + f.createdAt} {...f} />
        </>
      ))}
    </Box>
  )
}

export async function getStaticPaths() {
  const { sites } = await getAllSites()

  const paths = sites.map(site => ({
    params: {
      siteID: site.id.toString()
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const siteID = context.params.siteID
  const { feedback } = await getAllFeedBack(siteID)

  return {
    props: {
      initialFeedBack: feedback
    }
  }
}

export default FeedbackPage
