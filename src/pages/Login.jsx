import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLogInUserMutation } from '../redux/user/userApiSlice';
import { logIn } from '../redux/user/userSlice';
import { 
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset,
    Box,
    Flex,
    Heading,
    Link,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Text
 } from '@chakra-ui/react';
import extraTheme from '../theme/theme';




const {colors,shadows,styles,components,breakpoints,fonts} = extraTheme;

console.log(colors);
console.log(shadows);
console.log(styles);
console.log(components);
console.log(breakpoints);
console.log(fonts);

const Login = () => {
    const dispatch = useDispatch();
    const [logInUser, { isLoading }] = useLogInUserMutation();

    useEffect(() => {
        (async function login() {
            const user = {
                "email": "p_a_m@i.ua",
                "password": "12344321"
            }
            try {
                const { data, error } = await logInUser(user);
                if (!data) return console.log(error)

                dispatch(logIn(data));
                console.log('login successfully')
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    return (!isLoading && (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginSubBlock />
      </ColorModeProvider>
    </ThemeProvider>
        ));
}




const LoginSubBlock =() => {
    return (
        <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
          <Box 
            borderWidth={1}
            px={4}
            width='full'
            maxWidth='500px'
            borderRadius={4}
            textAlign='center'
            boxShadow='lg'
            pt='42px'
          >
            <Box p={4}>
              <LoginHeader />
              <LoginForm />
            </Box>
          </Box>
        </Flex>
      )
}

const LoginHeader = () => {
    return(    
            <Box textAlign='center'>
                <Heading>Login</Heading>
            </Box>)
}

const LoginForm =() =>{
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
          <Button background={colors.mainOrange} color={colors.white} width='full' mt={4}>Login</Button>

          <Stack isInline justifyContent='center' mt={4}>
              <Box>
                <Text>Don`t have an account? </Text>
              </Box>
              <Box>
                <Link color={'blue.500'} href={`Register`}>Register</Link>
              </Box>
          </Stack>  
        </form>
      </Box>    
        )
}

export default Login

              /*<Box>
                <Checkbox>Remember Me</Checkbox>
              </Box>*/