import React from 'react';
import { AuthNav } from '../AuthNav/AuthNav';
import { Logo } from '../Logo/Logo';
import userSelectors from '../../redux/user/user-selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { NavDesk } from '../NavDesk/NavDesk';
import { NavMob } from '../NavMob/NavMob';
import { NavTab } from '../NavTab/NavTab';
import { Flex } from '@chakra-ui/layout';

const Header = () => {
  const { isAuth } = userSelectors;
  const isLoggedIn = useSelector(isAuth);
  const isDesk = useMedia('(min-width: 1280px)');
  const isMob = useMedia('(max-width: 767px)');

  if (isMob) {
    console.log(isMob);
    return (
      <header style={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
        <Flex mr={{ xl: '80px' }}>
          <Logo />
        </Flex>
        <NavMob />
      </header>
    );
  } else if (isDesk) {
    return (
      <>
        <header style={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
          <div style={{ marginRight: '80px' }}>
            <Logo />
          </div>
          <NavDesk display={{ base: 'none', xl: 'flex' }} />

          <div
            style={{
              display: 'flex',
              marginLeft: 'auto',
              alignItems: 'center',
            }}
          >
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </header>
      </>
    );
  } else {
    return (
      <header style={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
        <div style={{ marginRight: '80px' }}>
          <Logo />
        </div>
        <NavTab />
      </header>
    );
  }
};
export default Header;
