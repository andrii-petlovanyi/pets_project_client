import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    Box,
    Icon,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    IconButton,
    Image,
    Input,
    Modal,
    ModalContent,
    ModalOverlay,
    Stack,
    Textarea,
    useDisclosure,
    Flex,
    Text,
} from '@chakra-ui/react';

import { TfiPlus } from 'react-icons/tfi';
import { HiPlus } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { useAddMyPetsMutation } from '../../redux/user/userApiSlice';

const schemaStep1 = yup.object().shape({
    name: yup.string().required('Pet name is required'),
    birthday: yup.string().required('Birthday is required'),
    breed: yup.string().required('Breed is required'),
});

const schemaStep2 = yup.object().shape({
    comment: yup.string().required('Comment is required'),
});

const AddPets = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [avatarError, setAvatarError] = useState('');
    const [step, setStep] = useState(1);

    const [addMyPets, { isLoading }] = useAddMyPetsMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm({
        resolver: yupResolver(step === 1 ? schemaStep1 : schemaStep2),
    });
    const newImage = watch('avatarURL');

    const onSubmit = async data => {
        if (!data.avatarURL[0]) {
            return setAvatarError('Avatar is required');
        }
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('breed', data.breed);
        formData.append('birth', data.birthday);
        formData.append('comment', data.comment);
        formData.append('image', data.avatarURL[0]);

        try {
            const { data: res, error } = await addMyPets(formData);
            if (error) return console.log(error);
            console.log(res);
            onClose();
            reset();
            setStep(1);
        } catch (error) {
            console.log(error);
        }
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <>
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
                <IconButton onClick={onOpen} variant={'mainIB'} icon={<HiPlus />} />
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} size={'custom'}>
                <ModalOverlay />
                <ModalContent bg={'white'} borderRadius={{ base: '20px', md: '40px' }}>
                    <IconButton
                        position={'absolute'}
                        top={{ base: '20px', xl: '24px' }}
                        right={{ base: '20px', xl: '24px' }}
                        icon={<MdClose />}
                        variant={'secondIB'}
                        onClick={onClose}
                    />
                    <Heading
                        as={'h2'}
                        variant={'modalAddTitle'}
                        textAlign={'center'}
                        mb={{ base: '28px', lg: '40px' }}
                    >
                        Add pet
                    </Heading>
                    {step === 1 && (
                        <Stack
                            gap={{ base: '16px', md: '28px' }}
                            w="100%"
                            as="form"
                            onSubmit={handleSubmit(nextStep)}
                        >
                            <FormControl isInvalid={errors.name}>
                                <FormLabel htmlFor="name">Name pet</FormLabel>
                                <Input
                                    variant={'addPetsForm'}
                                    placeholder={'Type name pet'}
                                    {...register('name')}
                                />
                                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.birthday}>
                                <FormLabel htmlFor="birthday">Date of birth</FormLabel>
                                <Input
                                    variant={'addPetsForm'}
                                    placeholder={'Type date of birth'}
                                    type="text"
                                    {...register('birthday')}
                                />
                                <FormErrorMessage>{errors.birthday?.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl
                                isInvalid={errors.breed}
                                mb={{ base: '28px', lg: '40px' }}
                            >
                                <FormLabel htmlFor="breed">Breed</FormLabel>
                                <Input
                                    variant={'addPetsForm'}
                                    placeholder={'Type bread'}
                                    {...register('breed')}
                                />
                                <FormErrorMessage>{errors.breed?.message}</FormErrorMessage>
                            </FormControl>
                            <Flex
                                pt={'20px'}
                                flexDirection={{ base: 'column', lg: 'row' }}
                                justifyContent={{ base: 'center', lg: 'center' }}
                                gap={{ base: '12px', lg: '20px' }}
                            >
                                <Button
                                    type="button"
                                    width={{ base: '100%', lg: '180px' }}
                                    variant={'fullBGBtn'}
                                    onClick={onClose}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    width={{ base: '100%', lg: '180px' }}
                                    variant={'outlineTabBtn'}
                                >
                                    Next
                                </Button>
                            </Flex>
                        </Stack>
                    )}
                    {step === 2 && (
                        <Stack
                            gap={'20px'}
                            w="100%"
                            as="form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Text
                                mx={'auto'}
                                fontSize={{ base: '16px', md: '20px' }}
                                lineHeight={{ base: '22px', md: '27px' }}
                            >
                                Add photo and some comments
                            </Text>
                            <FormControl
                                display={'flex'}
                                justifyContent={'center'}
                                position={'relative'}
                                isInvalid={avatarError}
                            >
                                <FormLabel
                                    htmlFor="avatarURL"
                                    border={avatarError ? '1px solid red' : ''}
                                    width={{ base: '208px', md: '182px' }}
                                    height={{ base: '208px', md: '182px' }}
                                    bg={'mainColor'}
                                    borderRadius={'40px'}
                                    margin={'0'}
                                ></FormLabel>
                                <Input
                                    id="avatarURL"
                                    display={'none'}
                                    type="file"
                                    {...register('avatarURL')}
                                />
                                {newImage && newImage[0] ? (
                                    <Image
                                        pointerEvents={'none'}
                                        borderRadius={'40px'}
                                        position={'absolute'}
                                        top={'50%'}
                                        left={'50%'}
                                        transform={'translate(-50%, -50%)'}
                                        width={{ base: '208px', md: '182px' }}
                                        height={{ base: '208px', md: '182px' }}
                                        src={URL.createObjectURL(newImage[0])}
                                        boxSize="182px"
                                        objectFit="cover"
                                    />
                                ) : (
                                    <Icon
                                        as={TfiPlus}
                                        pointerEvents={'none'}
                                        position={'absolute'}
                                        top={'50%'}
                                        left={'50%'}
                                        transform={'translate(-50%, -50%)'}
                                        fontSize={'48px'}
                                    />
                                )}
                                <FormErrorMessage
                                    position={'absolute'}
                                    bottom={'-20px'}
                                    left={'50%'}
                                    transform={'translateX(-50%)'}
                                >
                                    {avatarError}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.comment}>
                                <FormLabel
                                    htmlFor="comments"
                                    fontSize={{ base: '18px', md: '24' }}
                                    lineHeight={'26px'}
                                    fontWeight={'500'}
                                    fontFamily={'Manrope'}
                                >
                                    Comments
                                </FormLabel>
                                <Textarea variant={'addForm'} {...register('comment')} />
                                <FormErrorMessage>{errors.comment?.message}</FormErrorMessage>
                            </FormControl>
                            <Flex
                                pt={'20px'}
                                flexDirection={{ base: 'column', lg: 'row' }}
                                justifyContent={{ base: 'center', lg: 'center' }}
                                gap={{ base: '12px', lg: '20px' }}
                            >
                                <Button
                                    width={{ base: '100%', lg: '180px' }}
                                    variant={'outlineTabBtn'}
                                    onClick={prevStep}
                                >
                                    Back
                                </Button>
                                <Button
                                    width={{ base: '100%', lg: '180px' }}
                                    variant={'fullBGBtn'}
                                    type="submit"
                                    isLoading={isLoading}
                                >
                                    Done
                                </Button>
                            </Flex>
                        </Stack>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddPets;
