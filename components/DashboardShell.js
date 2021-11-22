import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button,
  Flex,
  Link,
  Avatar,
  Icon
} from '@chakra-ui/react'

import { useAuth } from '@/lib/auth'
import AddModalSite from './AddModalSite'

const DashboardShell = ({ children }) => {
  const { user, signOut } = useAuth()

  return (
    <Box h="100vh">
      <Flex mb={16} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
        >
          <Flex>
            <Icon name="logo" size="24px" mr={8} />
            <Link mr={4}>Sites</Link>
            <Link>Feedback</Link>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {user && (
              <Button variant="ghost" mr={2} onClick={() => signOut()}>
                Log Out
              </Button>
            )}

            <Avatar size="sm" src={user?.photoURL} />
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
        <Breadcrumb>
          <BreadcrumbItem>
            {/* <BreadcrumbLink>Sites</BreadcrumbLink> */}
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-around">
          <Heading>My sites</Heading>
          <AddModalSite>Add site</AddModalSite>
        </Flex>
        {children}
      </Flex>
    </Box>
  )
}

export default DashboardShell
