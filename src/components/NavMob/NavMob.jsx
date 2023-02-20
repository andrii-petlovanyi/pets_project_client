import React from 'react';
import { useState } from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
import { GrFormClose } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';

import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { IconContext } from 'react-icons';
import { AuthNav } from '../AuthNav/AuthNav';
import userSelectors from '../../redux/user/user-selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const NavMob = ({ ...props }) => {
  const { isAuth } = userSelectors;
  const isLoggedIn = useSelector(isAuth);
  const [display, changeDisplay] = useState('none');

  {
    return (
      <Flex {...props}>
        <Flex position="fixed" top="1rem" right="1rem" align="center">
          <IconButton
            aria-label="Open Menu"
            icon={<HiMenu size="40px" />}
            onClick={() => changeDisplay('flex')}
            variant="clearBtn"
            color={'212121'}
            display={'inline'}
          />
        </Flex>

        <Flex
          w="100vw"
          display={display}
          bgColor="mainColor"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex pt="16px" pr="20px" pl="16px" flexDir="column">
            <Flex justify="space-between" alignItems="center" mb="46px">
              <Logo />
              <IconButton
                variant="clearBtn"
                aria-label="Open Menu"
                icon={
                  <IconContext.Provider
                    value={{
                      color: 'accentTextColor',
                      size: '40px',
                    }}
                  >
                    <GrFormClose />
                  </IconContext.Provider>
                }
                onClick={() => changeDisplay('none')}
              />
            </Flex>
            <Flex justifyContent={'center'} mb={'60px'}>
              {isLoggedIn ? <UserMenu /> : <AuthNav gap={{ mb: '12px' }} />}
            </Flex>
            <Flex
              flexDir="column"
              align="center"
              gap="40px"
              fontFamily="Manrope"
              color="thirdTextColor"
              fontWeight="500"
              fontSize="32px"
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
    );
  }
};
