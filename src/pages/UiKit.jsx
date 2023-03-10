import React from 'react';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  Text,
  InputRightElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdCheck,
  MdEdit,
  MdFavorite,
  MdOutlineDeleteOutline,
  MdOutlineFavoriteBorder,
  MdSearch,
} from 'react-icons/md';
import { HiPlus } from 'react-icons/hi';
import AddPets from '../components/UserPets/AddPets';

const UiKit = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
      <Flex gap={'10px'}>
        <Button variant={'outlineTabBtn'}>Tab</Button>
        <Button variant={'outlineTabActive'}>ActiveTab</Button>
      </Flex>

      <Button variant={'outlineCardBtn'}>Learn more</Button>
      <Button variant={'outlineCardBtn'}>
        <Text mr={'13px'}>Delete</Text> <MdOutlineDeleteOutline size={'20px'} />
      </Button>

      <Flex
        bg={'green.300'}
        p={'10px'}
        borderRadius={'10px'}
        width={'250px'}
        gap={'10px'}
      >
        <IconButton variant={'cardFavIB'} icon={<MdOutlineFavoriteBorder />} />
        <IconButton variant={'cardFavIB'} icon={<MdFavorite />} />
        <IconButton variant={'mainIB'} icon={<HiPlus />} />
        <IconButton variant={'secondIB'} icon={<MdOutlineDeleteOutline />} />
      </Flex>

      <Input variant={'form'} width={'300px'} placeholder={'Name'} />

      <InputGroup
        width={{ base: '280px', lg: '608px' }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Input placeholder="Search" variant={'search'} />
        <InputRightElement height={{ base: '40px', lg: '44px' }}>
          <MdSearch size={'24px'} />
        </InputRightElement>
      </InputGroup>

      <Textarea width={'195px'} minH={'119px'} placeholder='Example textarea' variant={'custom'} />

      <Box
        color={'textColor'}
        fontWeight={'500'}
        fontSize={'20px'}
        lineHeight={'27px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'12px'}
      >
        Add pet
        <IconButton variant={'mainIB'} icon={<HiPlus />} />
      </Box>

      <Flex
        bg={'white'}
        p={'20px'}
        borderRadius={'20px'}
        // w={'400px'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'10px'}
      >
        <Text>Input for UserProfile</Text>
        <Flex gap={'10px'} alignItems={'center'}>
          <Input defaultValue={'Andrii'} variant={'userInfoActive'} />
          <IconButton variant={'userEditIB'} size={'sm'} icon={<MdCheck size={'25px'} />} />
        </Flex>
        <Flex gap={'10px'} alignItems={'center'}>
          <Input defaultValue={'Andrii'} variant={'userInfoDisabled'} />
          <IconButton variant={'userEditDisabledIB'} size={'sm'} icon={<MdEdit size={'20px'} />} />
        </Flex>
      </Flex>

      <AddPets />
    </Box >
  )
}

export default UiKit;
