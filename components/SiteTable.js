import { Table, Thead, Tbody, Tr, Th, Td, Link } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns/fp'

const SiteTable = ({ sites }) => {
  return (
    <Table variant="simple">
      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
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
              <Link>View FeedBack</Link>
            </Td>
            {/* <Td>{format(parseISO(site.createdAt, 'PPpp'))}</Td> */}
            <Td>{site.createdAt}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default SiteTable
