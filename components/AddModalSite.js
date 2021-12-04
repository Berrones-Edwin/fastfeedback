import { useAuth } from '@/lib/auth'
import { createSite } from '@/lib/db'
import {
  Button,
  FormControl,
  FormLabel,
  Input, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,
  useToast
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { mutate } from 'swr'

const AddModalSite = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef()
  const { handleSubmit, register, reset } = useForm()
  const toast = useToast()
  const { user } = useAuth()

  const onCreateSite = ({ site, url }) => {
    const newSite = {
      authorID: user.uid,
      createdAt: new Date().toISOString(),
      site,
      url
    }

    createSite(newSite)

    mutate(
      ['/api/sites', user.token],
      async data => {
        return [...data.sites, newSite]
      },
      false
    )
    onClose()

    reset()

    toast({
      title: 'Success!!',
      description: "We've added your site.",
      status: 'success',
      duration: 5000,
      isClosable: true
    })
  }

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                placeholder="My site"
                name="site"
                {...register('site', { required: true, minLength: 5 })}
                autoComplete="off"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Site</FormLabel>
              <Input
                type="url"
                placeholder="Https://mysite.com"
                name="url"
                {...register('url')}
                autoComplete="off"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
              variant="ghost"
            >
              Save site
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddModalSite
