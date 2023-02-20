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
} from "@chakra-ui/react";

const schema = yup.object().shape({
    petName: yup.string().required("Pet name is required"),
    birthday: yup.string().required("Birthday is required"),
    breed: yup.string().required("Breed is required"),
    comments: yup.string(),
});

export default function TwoStepForm() {
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
                        <FormControl>
                            <FormLabel htmlFor="image">Image</FormLabel>
                            <Input type="file" {...register("image")} />
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
        </Box>
    );
}