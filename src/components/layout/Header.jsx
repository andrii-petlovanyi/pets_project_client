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
  //   const isTab = useMedia('(min-width: 768px)');
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
<<<<<<< HEAD
            <div style={{ marginRight: '30px' }}>Logo</div>
            <nav style={{ display: 'flex', gap: '10px' }}>
                <NavLink to='news'>News</NavLink>
                <NavLink to='notices'>Find pet</NavLink>
                <NavLink to='partners'>Our friends</NavLink>
                <NavLink to='uikit'>UI Kit</NavLink>
                

            </nav>

            <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px'}}>
                <NavLink to='/'>Cabinet</NavLink>
                <NavLink to='login'>Login</NavLink>
                <NavLink to='register'>Registration</NavLink>
            </div>
=======
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
>>>>>>> main
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



