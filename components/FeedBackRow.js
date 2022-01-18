import { useAuth } from '@/lib/auth'
import { updateFeedback } from '@/lib/db'
import { Code, Switch, Td, Tr } from '@chakra-ui/react'
import { mutate } from 'swr'
import DeleteFeedBackButton from './DeleteFeedBackButton'

const FeedBackRow = ({ id, author, text, route, status,provider }) => {
  const auth = useAuth()
  const isChecked = status === 'active'

  const toggleFeedback = async () => {
    await updateFeedback(id, { status: isChecked ? 'pending' : 'active' })
    mutate(['/api/feedback', auth.user.token])
  }

  return (
    <Tr key={id}>
      <Td>{author}</Td>
      <Td>{text}</Td>
      <Td>
        <Code>{route || '/'}</Code>
      </Td>
      <Td>{provider}</Td>
      <Td>
        <Switch
          onChange={toggleFeedback}
          color="green.500"
          defaultIsChecked={status === 'active'}
        />
      </Td>
      <Td>
        <DeleteFeedBackButton feedbackId={id} />
      </Td>
    </Tr>
  )
}

export default FeedBackRow
