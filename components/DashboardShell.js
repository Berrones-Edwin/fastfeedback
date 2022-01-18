import { useAuth } from '@/lib/auth'
import {
  Avatar,
  Box, Button,
  Flex, Icon,
  Link, Stack
} from '@chakra-ui/react'
import NextLink from 'next/link'

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
          <Stack direction={'row'} spacing={4}>
            <NextLink href="/" passHref>
              <Link mr={4}>
                <Icon name="logo" size="24px" mr={8} />
              </Link>
            </NextLink>
            <NextLink href="/sites" passHref>
              <Link>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Stack>
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
        {children}
      </Flex>
    </Box>
  )
}

export default DashboardShell
