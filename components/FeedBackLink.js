import { Flex, Link } from '@chakra-ui/react'
const FeedBackLink = ({ siteID }) => {
  return (
    <Flex justifyContent="space-between" mb={8} width="full" mt={1}>
      <Link fontSize="sm" href={`/p/${siteID}`}>
        Leave a comment{' '}
      </Link>

      <Link fontSize="xs" href={`/`}>
        Powered by Fast FeedBack
      </Link>
    </Flex>
  )
}

export default FeedBackLink
