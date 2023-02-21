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

            
            boxShadow={{ base: '0', lg: shadows.mainShadow}}
            top={{lg:'18%', xl:'17%'}}
            width={{ base: '280px', lg: '608px', xl: '618px' }}
            px={{ base: '0', lg: '20' }}
            pt={{ base: '22px', lg: '60px' }}
            pb={{ base: '0', lg: '10', xl: '60px' }}
            borderRadius="40px"
            
            bgColor={{ base: colors.mainColor, lg: colors.white }}
            mx="auto"
            
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
            
            <Heading textAlign='center'         
            as="h1"
            mb="10"
            mt={{ base: '0' }}
            fontWeight="medium">Login</Heading>
            )
}

const LoginForm =() =>{
    return(
        <Box my={8} textAlign='left'
        >
        <form>
              
          <FormControl>
            <FormLabel></FormLabel>
            <Input type='email' placeholder='Email'  position="relative"
            width={{ base: '280px', lg: '448px', xl: '458px' }}

            h={{ base: '10', lg: '52px' }}
              p={{ base: '11px 14px', lg: '14px 32px' }}
              fontSize={{ base: 'md', lg: '18px' }}
              lineHeight={'short'}
              
              bg={colors.mainColor}
              border="1px solid rgba(245, 146, 86, 0.5)"
              borderRadius="40px"
              _placeholder={{ color: colors.econdaryTextColor}}

            
            />
          </FormControl>
  
          <FormControl mt={4}>
            <FormLabel ></FormLabel>
            <Input type='password' placeholder='Password'  position="relative"

            
            width={{ base: '280px', lg: '448px', xl: '458px' }}

            h={{ base: '10', lg: '52px' }}
              p={{ base: '11px 14px', lg: '14px 32px' }}
              fontSize={{ base: 'md', lg: '18px' }}
              lineHeight={'short'}
              
              bg={colors.mainColor}
              border="1px solid rgba(245, 146, 86, 0.5)"
              borderRadius="40px"
              _placeholder={{ color: colors.econdaryTextColor}}/>
          </FormControl>
          <Button background={colors.mainOrange} color={colors.white} mt={4}
                        type="submit"
                        controle="secondary"
                        mb="40px"
                        h={{ base: '44px', xl: '48px' }}
                        width={{ base: '280px', lg: '448px', xl: '458px' }}
                        loadingText={'Login'}
                        aria-label="login"
                        borderRadius="40px"
          >Login</Button>

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