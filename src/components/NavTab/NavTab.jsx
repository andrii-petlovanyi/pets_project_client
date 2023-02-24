import React from 'react';
import { useState } from 'react';
import { Flex, IconButton, Link } from '@chakra-ui/react';
import { GrFormClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { AuthNav } from '../AuthNav/AuthNav';
import userSelectors from '../../redux/user/user-selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { HiMenu } from 'react-icons/hi';
export const NavTab = ({ ...props }) => {
  const { isAuth } = userSelectors;
  const isLoggedIn = useSelector(isAuth);
  const [display, changeDisplay] = useState('none');

  return (
    <>
      <Flex {...props}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <Flex right="1.5rem" align="center">
          <IconButton
            aria-label="Open Menu"
            size="lg"
            icon={<HiMenu size="40px" />}
            onClick={() => changeDisplay('flex')}
            variant="clearBtn"
            color={'212121'}
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
          <Flex
            padding={{ lg: '24px 32px' }}
            pt="24px"
            pr="32px"
            pl="32px"
            flexDir="column"
          >
            <Flex justify="space-between" alignItems="center" mb="88px">
              <Logo />
              <IconButton
                border="none"
                aria-label="Open Menu"
                icon={<GrFormClose size="40px" />}
                onClick={() => changeDisplay('none')}
                variant="clearBtn"
              />
            </Flex>

            <Flex
              flexDir="column"
              align="center"
              gap="60px"
              fontFamily="Manrope"
              color="thirdTextColor"
              fontWeight="500"
              fontSize="48px"
              lineHeight="1.35"
              letterSpacing="0.04em"
            >
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
    </>
  );
};
