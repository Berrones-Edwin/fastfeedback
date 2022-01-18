import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading
} from '@chakra-ui/react'
import NextLink from 'next/link'
const SiteHeader = ({ siteName }) => {
  return (
    <Box>
      <Breadcrumb>
        <BreadcrumbItem>
          <NextLink href="/sites" passHref>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink>{siteName || '-'}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent={'space-between'}>
        <Heading mb={8}>{siteName || '-'}</Heading>
      </Flex>
    </Box>
  )
}

export default SiteHeader
