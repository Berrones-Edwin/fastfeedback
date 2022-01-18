import { Link, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'
import NextLink from 'next/link'

const SiteTable = ({ sites }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sites.map(site => (
          <Tr key={site.url}>
            <Td>{site.site}</Td>
            <Td>{site.url}</Td>
            <Td>
              <NextLink href="/site/[siteID]" as={`site/${site.id}`} passHref>
                <Link color="blue.500" fontWeight={'medium'}>View FeedBack</Link>
              </NextLink>
            </Td>
            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default SiteTable
