import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import FeedBackRow from './FeedBackRow'

const FeedBackTable = ({ allFeedback }) => {

  
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Comment</Th>
          <Th>Site</Th>
          <Th>Provider</Th>
          <Th>Status</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {allFeedback.map(feedback => (
          <FeedBackRow key={feedback.id} {...feedback} />
        ))}
      </Tbody>
    </Table>
  )
}

export default FeedBackTable
