import { Link, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import NextLink from 'next/link'
import { format,parseISO} from 'date-fns'

const SiteTable = ({ sites }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          {/* <Th> </Th> */}
        </Tr>
      </Thead>
      <Tbody>
        {sites.map(site => (
          <Tr key={site.url}>
            <Td>{site.site}</Td>
            <Td>{site.url}</Td>
            <Td>
              <NextLink href="/p/[siteID]" as={`p/${site.id}`} passHref>
                <Link>View FeedBack</Link>
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
