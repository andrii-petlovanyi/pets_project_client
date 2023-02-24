import React, { useEffect } from 'react';
import { useState } from 'react';
import { Flex, IconButton, Link } from '@chakra-ui/react';
import { GrFormClose } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';

import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { IconContext } from 'react-icons';
import { AuthNav } from '../AuthNav/AuthNav';
import userSelectors from '../../redux/user/user-selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const NavMob = ({ ...props }) => {
  const { isAuth } = userSelectors;
  const location = useLocation().pathname;
  const isLoggedIn = useSelector(isAuth);
  const [display, changeDisplay] = useState('none');

  useEffect(() => {
    changeDisplay('none');
  }, [location]);

  {
    return (
      <Flex {...props}>
        <Flex
          top="1rem"
          right="1.5rem"
          align="center"
          justifyContent="space-between"
        >
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
          <Flex padding={{ base: '16px 20px' }} flexDir="column">
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
              {isLoggedIn ? (
                <UserMenu changeDisplay={changeDisplay} />
              ) : (
                <AuthNav changeDisplay={changeDisplay} gap={{ mb: '12px' }} />
              )}
            </Flex>
            <Flex flexDir="column" align="center" gap="40px">
              <Link
                variant={'headerLink'}
                as={NavLink}
                to="news"
                onClick={() => changeDisplay('none')}
              >
                News
              </Link>
              <Link
                variant={'headerLink'}
                as={NavLink}
                to="notices"
                onClick={() => changeDisplay('none')}
              >
                Find pet
              </Link>
              <Link
                variant={'headerLink'}
                as={NavLink}
                to="friends"
                onClick={() => changeDisplay('none')}
              >
                Our friends
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }
};
