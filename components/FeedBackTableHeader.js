import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading
} from '@chakra-ui/react'
import NextLink from 'next/link'

const FeedBackTableHeader = ({ siteName }) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <NextLink href="/feedback" passHref>
            <BreadcrumbLink>Feedback</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={8}>All Feedback</Heading>
      </Flex>
    </>
  )
}

export default FeedBackTableHeader
