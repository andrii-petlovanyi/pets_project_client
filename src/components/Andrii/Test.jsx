import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Stack,
    VStack,
    Box,
    Text,
    Textarea,
    Image,
    Icon,
    Heading
} from "@chakra-ui/react";
import { TfiPlus } from 'react-icons/tfi'


const schema = yup.object().shape({
    petName: yup.string().required("Pet name is required"),
    birthday: yup.string().required("Birthday is required"),
    breed: yup.string().required("Breed is required"),
    comments: yup.string(),
});

export default function TwoStepForm() {
    const [imagePreview, setImagePreview] = useState(null);
    const [step, setStep] = useState(1);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImagePreview(reader.result);
            };
        }
    };

    return (
        <Box w="100%" maxW="400px" mx="auto" mt="8">
            <VStack spacing="6">
                <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                    Add my pet
                </Text>
                {step === 1 && (
                    <Stack spacing="4" w="100%" as="form" onSubmit={handleSubmit(nextStep)}>
                        <FormControl isInvalid={errors.petName}>
                            <FormLabel htmlFor="petName">Pet Name</FormLabel>
                            <Input variant={'addPetsForm'} placeholder={'Type name pet'} {...register("petName")} />
                            <FormErrorMessage>{errors.petName?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.birthday}>
                            <FormLabel htmlFor="birthday">Birthday</FormLabel>
                            <Input variant={'addPetsForm'} placeholder={'Type date of birth'} type="date" {...register("birthday")} />
                            <FormErrorMessage>{errors.birthday?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.breed}>
                            <FormLabel htmlFor="breed">Breed</FormLabel>
                            <Input variant={'addPetsForm'} placeholder={'Type bread'} {...register("breed")} />
                            <FormErrorMessage>{errors.breed?.message}</FormErrorMessage>
                        </FormControl>
                        <Button type="submit" variant={'fullBGBtn'}>Next</Button>
                    </Stack>
                )}
                {step === 2 && (
                    <Stack spacing="4" w="100%" as="form" onSubmit={handleSubmit(onSubmit)}>
                        <Heading as={'h2'} mx={'auto'} fontSize={'20px'}>Add photo and some comments</Heading>
                        <FormControl display={'flex'} justifyContent={'center'} position={'relative'}>
                            <FormLabel htmlFor="image" width={'182px'} height={'182px'} bg={'mainColor'} borderRadius={'40px'} margin={'0'}></FormLabel>
                            <Input id="image" display={'none'} type="file" {...register("image")} onChange={handleImageChange} />
                            {!imagePreview && <Icon as={TfiPlus} pointerEvents={'none'} position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} fontSize={'48px'} />}
                            {imagePreview && <Image pointerEvents={'none'} borderRadius={'40px'} position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} width={'182px'} height={'182px'} src={imagePreview} boxSize="182px" objectFit="cover" />}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="comments">Comments</FormLabel>
                            <Textarea {...register("comments")} />
                        </FormControl>
                        <Stack direction="row" justify="space-between">
                            <Button onClick={prevStep}>Previous</Button>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </Stack>
                )}
            </VStack>
        </Box >
    );
}