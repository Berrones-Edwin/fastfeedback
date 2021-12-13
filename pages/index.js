import { useAuth } from '@/lib/auth'
import { Box, Button, Flex, Link, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
export default function Home() {
  const auth = useAuth()
  return (
    <>
      <Box bg="gray.100">
        <Flex
          as="main"
          direction="column"
          justify="center"
          align="center"
          h="100vh"
        >
          <Head>
            <title>Fast Feedback</title>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              if (document.cookie && document.cookie.includes('auth')) {
                window.location.href = "/dashboard"
              }
            `
              }}
            />
          </Head>

          <Text mb={4} fontSize="lg" p={6}>
            <Text as="span" fontWeight="bold" display="inline">
              Fast Feedback
            </Text>
            {' is being built as part of '}
            <Link
              href="https://react2025.com"
              isExternal
              textDecoration="underline"
            >
              Sign In with GitHub React 2025
            </Link>
            {`. It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by logging in.`}
          </Text>
          {auth?.user ? (
            <>
              <Text>Current user : {auth.user.name}</Text>
              <Button
                as="a"
                href="/dashboard"
                backgroundColor="white"
                color="gray.900"
                variant="outline"
                fontWeight="medium"
                leftIcon="google"
                mt={4}
                size="lg"
                _hover={{ bg: 'gray.100' }}
                _active={{
                  bg: 'gray.100',
                  transform: 'scale(0.95)'
                }}
              >
                View Dashboard
              </Button>
            </>
          ) : (
            <Stack>
              <Button
                onClick={e => auth.signInWithGithub()}
                backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                // leftIcon="github"
                mt={4}
                size="lg"
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)'
                }}
              >
                Sign In with GitHub
              </Button>
              <Button
                onClick={e => auth.signInWithGoogle()}
                backgroundColor="white"
                color="gray.900"
                variant="outline"
                fontWeight="medium"
                leftIcon="google"
                mt={4}
                size="lg"
                _hover={{ bg: 'gray.100' }}
                _active={{
                  bg: 'gray.100',
                  transform: 'scale(0.95)'
                }}
              >
                Sign In with Google
              </Button>
            </Stack>
          )}
        </Flex>
      </Box>
    </>
  )
}
