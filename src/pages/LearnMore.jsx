import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Flex,
} from '@chakra-ui/react';
import { Button, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { MdFavorite } from 'react-icons/md';

// export const UserPetsItem = ({ pet = {} }) => {
//   const { name, birth, breed, avatarURL, comment, _id } = pet;
function LearnMore() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} variant={'outlineCardBtn'}>
        Learn More
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="background: rgba(17, 17, 17, 0.6)"
          backdropFilter="blur(10px)"
          alignItems={'center'}
        />
        <ModalContent
          maxW={{ base: '280px', lg: '704px' }}
          width={'100%'}
          borderRadius={{ base: '20px', lg: '40px' }}
          padding={{ base: '0', lg: '' }}
        >
          <Flex display={'flex'} flexDirection={{ base: 'column', lg: 'row' }}>
            <Image
              objectFit="cover"
              border={'1px solid'}
              height={{ base: '240px', lg: '328px' }}
              width={{ base: '240px', lg: '288px' }}
              marginLeft={{ base: '20px', lg: '' }}
              marginTop={{ base: '60px', lg: '32px' }}
              borderRadius={'0px 0px 40px 40px'}
              marginRight={{ base: '20px', lg: '' }}
              alignItems={{ base: '0', lg: '' }}
            />
            <Box
              flex={{ base: 'none', md: '' }}
              bg="white"
              p={{ base: '4', lg: '' }}
              marginTop={'0'}
            >
              <Box>
                <ModalCloseButton size={'36px'} top={'24px'} right={'24px'} />
                <ModalHeader
                  fontFamily={'Manrope'}
                  fontStyle={'normal'}
                  fontWeight={'700'}
                  fontSize={{ base: '24px', lg: '28px' }}
                  lineHeight={{ base: '33px', lg: '38px' }}
                  maxW={'321px'}
                  // mt={'0'}
                  mb={'8px'}
                >
                  Сute dog looking for a home
                </ModalHeader>
                <ModalBody
                  fontFamily={'Manrope'}
                  fontStyle={'normal'}
                  fontWeight={'600'}
                  fontSize={{ base: '14px', lg: '16px' }}
                  lineHeight={{ base: '19px', lg: '22px' }}
                >
                  <Text>Name:</Text>
                  <Text>Birthday:</Text>
                  <Text>Breed:</Text>
                  <Text>Place:</Text>
                  <Text>The sex:</Text>
                  <Text>Email:</Text>
                  <Text>Phone:</Text>
                  <Text>Prise:</Text>
                </ModalBody>
              </Box>
            </Box>
          </Flex>

          <Flex>
            <ModalBody
              mt={'32px'}
              ml={'20px'}
            >
              <Text>Coment:</Text>
            </ModalBody>
          </Flex>

          {/* <ModalBody></ModalBody> */}
          <ModalFooter
            gap={'12px'}
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Button
              rightIcon={<MdFavorite />}
              variant={'outlineTabBtn'}
              textColor={'#F59256'}
              width={{ base: '240px', lg: '160px' }}
            >
              <Text mr={'13px'}>
                Add to
              </Text>{' '}
            </Button>
            <Button
              variant={'outlineTabActive'}
              width={{ base: '240px', lg: '160px' }}
            >
              Contact
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default LearnMore;
