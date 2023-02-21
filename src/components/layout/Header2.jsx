import React from 'react';
import { Logo } from '../Logo/Logo';
import userSelectors from '../../redux/user/user-selectors';
import { useSelector } from 'react-redux';
import { NavMob } from '../NavMob/NavMob';
import { Flex } from '@chakra-ui/layout';
import { NavDesk } from '../NavDesk/NavDesk';
import UserMenu from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { NavTab } from '../NavTab/NavTab';

export const HeaderNew = () => {
  const { isAuth } = userSelectors;
  const isLoggedIn = useSelector(isAuth);

  return (
    <header style={{ display: 'flex', gap: '10px', paddingTop: '16px' }}>
      <Flex mr={{ xl: '80px' }}>
        <Logo />
      </Flex>
      <NavDesk display={{ base: 'none', xl: 'flex' }} />
      <NavMob display={{ base: 'flex', lg: 'none' }} />
      <Flex
        marginLeft={'auto'}
        alignItems={'center'}
        display={{ base: 'none', xl: 'flex' }}
      >
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
      <NavTab
        display={{ base: 'none', lg: 'flex', xl: 'none' }}
        marginLeft={'auto'}
        alignItems={'center'}
      />
    </header>
  );
};
