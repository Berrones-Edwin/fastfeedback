import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { createSite } from '@/lib/db'

const AddModalSite = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef()
  const { handleSubmit, register, reset } = useForm()

  const onCreateSite = values => {
    createSite(values)
    onClose()
    reset()
  }

  return (
    <>
      <Button fontWeight="medium" onClick={onOpen} maxW="200px">
        Add your first site
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
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
