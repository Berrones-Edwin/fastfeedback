import { Flex, Heading, Text } from '@chakra-ui/react'

const FeedBackEmptyState = () => {
  return (
    <Flex
      w={'100%'}
      borderRadius={'9px'}
      p={16}
      justify={'center'}
      align={'center'}
      direction={'column'}
    >
      <Heading size={'lg'}> There isn't any feedback</Heading>
      <Text mb={4}>Share your site!</Text>
    </Flex>
  )
}

export default FeedBackEmptyState
