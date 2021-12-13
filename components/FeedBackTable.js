import { Switch, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import DeleteFeedBackButton from './DeleteFeedBackButton'

const FeedBackTable = ({ allFeedback }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Comment</Th>
          <Th>Site</Th>
          <Th>Status</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {allFeedback.map(feedback => (
          <Tr key={feedback.id}>
            <Td>{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>{feedback.provider}</Td>
            <Td>
              <Switch
                color="green.500"
                defaultIsChecked={feedback.status === 'active'}
              />
            </Td>
            <Td>
              <DeleteFeedBackButton feedbackId={feedback.id} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default FeedBackTable
