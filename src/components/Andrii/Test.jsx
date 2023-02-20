import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
    Flex,
} from "@chakra-ui/react";

export default function AddMyPet() {
    const [step, setStep] = useState(1);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        //заглушка
        console.log(data);
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
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
                            <Input variant={'addPetsForm'} placeholder={'Type name pet'} {...register("petName", { required: true })} />
                            <FormErrorMessage>
                                {errors.petName && "Pet name is required"}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.birthday}>
                            <FormLabel htmlFor="birthday">Date of birth</FormLabel>
                            <Input variant={'addPetsForm'} placeholder={'Type date of birth'} type="date" {...register("birthday", { required: true })} />
                            <FormErrorMessage>
                                {errors.birthday && "Birthday is required"}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.breed}>
                            <FormLabel htmlFor="breed">Breed</FormLabel>
                            <Input variant={'addPetsForm'} placeholder={'Type breed'} {...register("breed", { required: true })} />
                            <FormErrorMessage>
                                {errors.breed && "Breed is required"}
                            </FormErrorMessage>
                        </FormControl>
                        <Flex direction={'row'} justifyContent={'center'} gap={'24px'}>
                            <Button type="button" variant={'outlineTabBtn'}>Cancel</Button>
                            <Button type="submit" variant={'fullBGBtn'}>Next</Button>
                        </Flex>
                    </Stack>
                )}
                {step === 2 && (
                    <Stack spacing="4" w="100%" as="form" onSubmit={handleSubmit(onSubmit)}>
                        <FormControl>
                            <FormLabel htmlFor="image">Image</FormLabel>
                            <Input type="file" {...register("image")} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="comments">Comments</FormLabel>
                            <Textarea {...register("comments")} />
                        </FormControl>
                        <Flex direction="row" justify="space-between">
                            <Button onClick={prevStep}>Previous</Button>
                            <Button type="submit">Submit</Button>
                        </Flex>
                    </Stack>
                )}
            </VStack>
        </Box>
    );
}