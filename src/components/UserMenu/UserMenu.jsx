import React from 'react';
import { Button } from '@chakra-ui/react';
import { HiUserCircle } from 'react-icons/hi';
import { IoIosLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Button as={Link} to="/" variant="outlineTabActive" gap="12px">
          <IconContext.Provider
            value={{
              color: 'mainOrange',
              size: '28px',
            }}
          >
            <HiUserCircle />
          </IconContext.Provider>
          {name}
        </Button>
        <Button
          type="button"
          variant="outline"
          border="none"
          display="flex"
          gap="8px"
          alignItems="center"
        >
          <IconContext.Provider
            value={{
              color: '#F59256',
              size: '24px',
            }}
          >
            <IoIosLogOut />
          </IconContext.Provider>
          <Text
            color="rgba(17, 17, 17, 0.6)"
            fontFamily="Manrope"
            fontWeight="500"
            fontSize="16px"
            lineHeight="1.4"
          >
            Log Out
          </Text>
        </Button>
      </div>
    </>
  );
};
export default UserMenu;
