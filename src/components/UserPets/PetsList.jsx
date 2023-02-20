import React from 'react';
import { Badge, Flex, Heading } from '@chakra-ui/react';
// import { Box, Button } from '@chakra-ui/react';
// import { HiUserCircle } from 'react-icons/hi';
// import { IoIosLogOut } from 'react-icons/io';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Text } from '@chakra-ui/react';
import userSelectors from '../../redux/user/user-selectors';

export const UserPetsList = () => {
  const { pets } = useSelector(userSelectors.user);
  return (
    <>
      <Heading mb={'20px'}>News</Heading>
      <Flex flexDirection={'column'} gap={'10px'}>
        {pets.length > 0 &&
          pets.map(n => (
            <Badge color={'textColor'} key={n.title}>
              {n.title}
            </Badge>
          ))}
      </Flex>
    </>
    // <Box display={'flex'} gap={'10px'}>
    //   <Button as={Link} to="/" variant="fullBGBtn" gap="12px">
    //     <HiUserCircle size={'28px'} />
    //     {name}
    //   </Button>
    //   <Button type="button" variant="clearBtn">
    //     <IoIosLogOut size={'24px'} />
    //     <Text color="labelColor">Log Out</Text>
    //   </Button>
    // </Box>
  );
};
export default UserMenu;
