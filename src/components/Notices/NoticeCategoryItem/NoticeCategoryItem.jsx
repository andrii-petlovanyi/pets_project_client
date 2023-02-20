import { Button, Card, CardBody, CardFooter, Heading, IconButton, Text, Image, Container, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

export const NoticeCategoryItem = () => {


    return (
        <Card maxW={{ base: '280px', lg: '336px', xl: '288px' }} h="606" boxShadow="7px 4px 14px rgba(49, 21, 4, 0.07)" borderRadius="0px 0px 40px 40px">
            <CardBody p="0"  >
                <Box>
                    <Image
                        src={"https://media.self.com/photos/5a81ca17a2e4610403db1fcd/4:4/w_288,c_limit/peter-rabbit-food-allergy-joke-sparked-outrage.jpg"}
                        w={{ base: '280px', lg: '336px', xl: '288px' }}
                        h="288"
                        alt="pet's photo"
                        position='relative'
                    />
                    <Text css={{
                        position: 'absolute',
                        top: 20,
                        borderRadius: '0 14px 14px 0',
                        background: 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(2px)',
                        width: 158,
                        height: 28,
                        fontSize: '12px',
                        fontWeight: "500",
                        letterSpacing: "0.04em",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>Sell</Text>
                    <IconButton type="button" variant={'cardFavIB'} icon={<MdOutlineFavoriteBorder />} css={{
                        position: 'absolute', right: 12, top: 12,
                    }} />
                    {/* <IconButton variant={'cardFavIB'} icon={<MdFavorite />} css={{
                        position: 'absolute', right: 12, top: 12,
                    }}/> */}
                </Box>

                <Container mt='20px' pr={{ base: '29px', lg: '85px', xl: '37px' }} pl="20px" >
                    <Heading size='md' fontSize="28px" fontWeight="700" lineHeight="38px" letterSpacing="-0.01em">Cute dog looking for a home</Heading>
                    <Flex mt="20px">
                        <Text fontSize="16px" fontWeight="500" lineHeight="22px">Breed:</Text>
                        <Text ml="37px" fontSize="16px" fontWeight="500" lineHeight="22px">Pomeranian</Text>
                    </Flex>
                    <Flex mt="8px">
                        <Text fontSize="16px" fontWeight="500" lineHeight="22px">Place:</Text>
                        <Text ml="40px" fontSize="16px" fontWeight="500" lineHeight="22px">Lviv</Text></Flex>
                    <Flex mt="8px">
                        <Text fontSize="16px" fontWeight="500" lineHeight="22px">Age:</Text>
                        <Text ml="52px" fontSize="16px" fontWeight="500" lineHeight="22px">one year</Text></Flex>
                    <Flex mt="8px">
                        <Text fontSize="16px" fontWeight="500" lineHeight="22px">Price:</Text>
                        <Text ml="44px" fontSize="16px" fontWeight="500" lineHeight="22px">50$</Text>
                    </Flex>
                </Container>
            </CardBody>
            <CardFooter pb="30px">
                <Button type="button" variant={'outlineCardBtn'} m="0 auto">Learn more</Button>
                {/* <Button type="button" m="0 auto" mt="12px" variant={'outlineCardBtn'}><Text mr={'13px'}>Delete</Text> <MdOutlineDeleteOutline size={'20px'} /></Button> */}
            </CardFooter>
        </Card>
    )
};
