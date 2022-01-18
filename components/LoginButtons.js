import { useAuth } from '@/lib/auth'
import { Button, Stack } from '@chakra-ui/react'

export default function LoginButtons() {
  const auth = useAuth()
  return (
    <Stack>
      <Button
        onClick={e => auth.signInWithGithub('/sites')}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
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
        onClick={e => auth.signInWithGoogle('/sites')}
        backgroundColor="white"
        color="gray.900"
        variant="outline"
        fontWeight="medium"
        // leftIcon="google"
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
  )
}
