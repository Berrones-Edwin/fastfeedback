import DashboardShell from '@/components/DashboardShell'
import FeedBack from '@/components/FeedBack'
import LoginButtons from '@/components/LoginButtons'
import SiteHeader from '@/components/SiteHeader'
import { useAuth } from '@/lib/auth'
import { createFeedback } from '@/lib/db'
import { getAllFeedBack, getAllSites, getSite } from '@/lib/db-admin'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

const FeedbackPage = ({ initialFeedBack,site }) => {
  const { user, loading } = useAuth()
  const router = useRouter()
  const inputEl = useRef(null)
  const [allFeedBack, setAllFeedBack] = useState(initialFeedBack)

  console.log(site)
  const handleSubmit = e => {
    e.preventDefault()

    const newFeedBack = {
      author: user.name,
      authorID: user.uid,
      siteID: router.query.siteID,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: user.provider,
      status: 'pending'
    }

    setAllFeedBack([newFeedBack, ...allFeedBack])

    createFeedback(newFeedBack)
    inputEl.current.value = ''
  }

  const LoginOrLeaveFeedback = () => {
   return  user ? (
      <Button
        type="submit"
        isDisabled={router.isFallback}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        mt={4}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        Leave Feedback
      </Button>
    ) : (
      <LoginButtons />
    )
  }
  return (
    <DashboardShell>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxW="700px"
        margin="0 auto"
      >
        <SiteHeader siteName={site?.site} />
        <Box
          display="flex"
          mx={4}
          flexDirection="column"
          width="full"
          maxWidth="700px"
        >
          <Box as="form" onSubmit={handleSubmit}>
            <FormControl my={8}>
              <FormLabel htmlFor="comment">Comment</FormLabel>
              <Input
                autoComplete="off"
                ref={inputEl}
                id="comment"
                placeholder="Leave a comment"
              />
              {!loading && <LoginOrLeaveFeedback />}
            </FormControl>
            {/* <Button type="submit" mt={4}>
              Add Comment
            </Button> */}
          </Box>
        </Box>
        {allFeedBack.map(f => (
          <>
            <FeedBack key={f.id + '' + f.createdAt} {...f} />
          </>
        ))}
      </Box>
    </DashboardShell>
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
    fallback: true
  }
}

export async function getStaticProps(context) {
  const siteID = context.params.siteID
  const { feedback } = await getAllFeedBack(siteID)
  const { site } = await getSite(siteID)

  return {
    props: {
      initialFeedBack: feedback,
      site
    }
  }
}

export default FeedbackPage
