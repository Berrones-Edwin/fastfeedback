import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Heading, Flex, Text, Button } from '@chakra-ui/react'

export default function Home() {
  const auth = useAuth()
  return (
    <>
      <Flex
        as="main"
        direction="column"
        justify="center"
        align="center"
        h="100vh"
      >
        <Head>
          <title>Fast Feedback</title>
        </Head>

        <Heading>Fast Feedback</Heading>
        {auth?.user ? (
          <>
            <Text>Current user : {auth.user.name}</Text>
            <Button onClick={auth.signOut}>Sign out</Button>
          </>
        ) : (
          <Button onClick={auth.signInWithGithub}>Sign In with github</Button>
        )}
      </Flex>
    </>
  )
}
