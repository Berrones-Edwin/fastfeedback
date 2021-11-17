import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'

import DashboardShell from './DashboardShell'
import AddModalSite from './AddModalSite'

const EmptyState = () => {
  return (
    <DashboardShell>
      <Flex
        width="100%"
        borderRadius="8px"
        p={16}
        justify="center"
        align="center"
        direction="column"
        border={'1px solid #FFF'}
      >
        <Heading size="lg" mb={2}>
          You haven’t added any sites.
        </Heading>
        <Text mb={4}>Let’s get started.</Text>
        <AddModalSite />
      </Flex>
    </DashboardShell>
  )
}

export default EmptyState
