import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'

const FeedBack = ({ author, text, createdAt }) => {
  return (
    <Box borderRadius={4} maxW="700px" w="full">
      <Heading fontWeight="medium" size="sm" as="h3" mb={0} color="white.900">
        {author}
      </Heading>
      <Text color="white.500" mb={4} fontSize="xs">
        {format(parseISO(createdAt), 'PPpp')}
      </Text>
      <Text color="white.800">{text}</Text>
      <Divider borderColor="white.200" bgColor="white.200" mt={8} mb={8} />
    </Box>
  )
}

export default FeedBack
