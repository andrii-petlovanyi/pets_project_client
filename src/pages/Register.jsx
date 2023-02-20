import React from 'react'
import {
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset,
    Box,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import extraTheme from '../theme/theme';

const {colors} = extraTheme;






const Register = () => {
    return (
        <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <RegisterSubBlock />
        </ColorModeProvider>
      </ThemeProvider>
    )
}

const RegisterSubBlock = () => {
    return(
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
        <Box 
          borderWidth={1}
          px={4}
          width='full'
          maxWidth='500px'
          borderRadius={4}
          textAlign='center'
          boxShadow='lg'
        >
          <Box p={4}>
            <RegisterHeader />
            <RegisterForm />
          </Box>
        </Box>
      </Flex>
    )
}

const RegisterHeader = () => {
    return(            
    <Box textAlign='center'>
        <Heading>Registration</Heading>
    </Box>)
}

const RegisterForm = () => {
    return(
        <Box my={8} textAlign='left'>
        <form>
          <FormControl>
            <FormLabel></FormLabel>
            <Input type='email' placeholder='Email' />
          </FormControl>
  
          <FormControl mt={4}>
            <FormLabel></FormLabel>
            <Input type='password' placeholder='Password' />
          </FormControl>
  
          <FormControl mt={4}>
            <FormLabel></FormLabel>
            <Input type='password' placeholder='Confirm Password' />
          </FormControl>


          <Button as={Link} to="../finalregister" background={colors.mainOrange} color={colors.white} width='full' mt={4} >Next</Button>
          <Stack isInline justifyContent='center' mt={4}>
              <Box>
                <Text>Already have an account? </Text>
              </Box>
              <Box>
                <Text as={Link} to="../login" color={'blue.500'} href={`Login`}>Login</Text>
              </Box>

          </Stack>
        </form>
      </Box>    
        )
}



export default Register