import { Table, Thead, Tbody, Tr, Th, Td, Skeleton } from '@chakra-ui/react'

const SiteTableSkeleton = () => {
  return (
    <Table variant="simple">
      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th> </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            {' '}
            <Skeleton height="20px" />
          </Td>
          <Td>
            {' '}
            <Skeleton height="20px" />
          </Td>
          <Td>
            {' '}
            <Skeleton height="20px" />
          </Td>
          <Td>
            {' '}
            <Skeleton height="20px" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default SiteTableSkeleton
