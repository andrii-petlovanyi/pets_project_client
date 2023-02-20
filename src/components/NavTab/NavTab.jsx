import React from 'react';
import { useState } from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { GrFormClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';
import { IconContext } from 'react-icons';
import { AuthNav } from '../AuthNav/AuthNav';
import userSelectors from '../../redux/user/user-selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
export const NavTab = () => {
  const { isAuth } = userSelectors;
  const isLoggedIn = useSelector(isAuth);
  const [display, changeDisplay] = useState('none');

  return (
    <>
      <Flex>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <Flex position="fixed" top="1rem" right="1rem" align="center">
          <IconButton
            aria-label="Open Menu"
            size="lg"
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay('flex')}
            // display={['flex', 'flex', 'flex', 'flex']}
          />
        </Flex>

        <Flex
          w="100vw"
          display={display}
          bgColor="#FDF7F2"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex pt="24px" pr="32px" pl="32px" flexDir="column">
            <Flex justify="space-between" alignItems="center" mb="88px">
              <Logo />
              <IconButton
                variant="outline"
                border="none"
                aria-label="Open Menu"
                icon={
                  <IconContext.Provider
                    value={{
                      color: '#212121',
                      size: '40px',
                    }}
                  >
                    <GrFormClose />
                  </IconContext.Provider>
                }
                onClick={() => changeDisplay('none')}
              />
            </Flex>

            <Flex
              flexDir="column"
              align="center"
              gap="60px"
              fontFamily="Manrope"
              color="#181C27"
              fontWeight="500"
              fontSize="48px"
              lineHeight="1.35"
              letterSpacing="0.04em"
            >
              <NavLink to="news" onClick={() => changeDisplay('none')}>
                News
              </NavLink>
              <NavLink to="notices" onClick={() => changeDisplay('none')}>
                Find pet
              </NavLink>
              <NavLink to="partners" onClick={() => changeDisplay('none')}>
                Our friends
              </NavLink>
              <NavLink to="uikit" onClick={() => changeDisplay('none')}>
                UI Kit
              </NavLink>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
