import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { HiUserCircle } from 'react-icons/hi';
import { IoIosLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { IconContext } from 'react-icons';
import { Text } from '@chakra-ui/react';
import userSelectors from '../../redux/user/user-selectors';

export const UserMenu = () => {
  const user = useSelector(userSelectors.user);
  return (
    <Box
      display={'flex'}
      gap={'10px'}
    >
      <Button as={Link} to="/" variant="fullBGBtn" gap="12px">
        <HiUserCircle size={'28px'} />
        {user.name}
      </Button>
      <Button
        type="button"
        variant="clearBtn"
      >
        <IoIosLogOut size={'24px'} />
        <Text
          color="labelColor"
        >
          Log Out
        </Text>
      </Button>
    </Box>
  );
};
export default UserMenu;
