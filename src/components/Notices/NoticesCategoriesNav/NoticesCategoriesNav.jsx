import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import ModalAddNew from '../ModalAddNotice/ModalAddNew';
import { useSelector } from 'react-redux';
import userSelectors from '../../../redux/user/user-selectors';

export const NoticesCategoriesNav = () => {
  const isAuth = useSelector(userSelectors.isAuth);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => setIsModalOpen(true);
  // const handleCloseModal = () => setIsModalOpen(false);
  return (
    <Box display={'flex'} gap={'30px'} w="100%">
      <Box as="nav" display={'flex'} flexWrap={'wrap'} gap={'12px'}>
        <Link as={NavLink} to="sell" variant={'tabLink'}>
          sell
        </Link>
        <Link as={NavLink} to="lost-found" variant={'tabLink'}>
          lost/found
        </Link>
        <Link as={NavLink} to="for-free" variant={'tabLink'}>
          in good hands
        </Link>
        {isAuth ? (
          <>
            <Link as={NavLink} to="favorite" variant={'tabLink'}>
              favorite ads
            </Link>
            <Link as={NavLink} to="own" variant={'tabLink'}>
              my ads
            </Link>
          </>
        ) : (
          ''
        )}

        {/* <ModalAddNotice isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      </Box>
      {/* <Box
          color={'textColor'}
          fontWeight={'500'}
          fontSize={'20px'}
          lineHeight={'27px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'12px'}
          onClick={handleOpenModal}
        >
          Add pet
          <IconButton variant={'mainIB'} icon={<HiPlus />} />
        </Box> */}
      <ModalAddNew />
    </Box>
  );
};

NoticesCategoriesNav.propTypes = {
  onClick: PropTypes.func,
};
