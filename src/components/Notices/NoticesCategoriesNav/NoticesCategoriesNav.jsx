import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import ModalAddNotice from '../ModalAddNotice/ModalAddNotice';
import { HiPlus } from 'react-icons/hi';


export const NoticesCategoriesNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <div>
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
        <Link as={NavLink} to="favorite" variant={'tabLink'}>
          favorite ads
        </Link>
        <Link as={NavLink} to="own" variant={'tabLink'}>
          my ads
        </Link>
        <Button variant={'clearAddBtn'} onClick={handleOpenModal}>Add pet<IconButton variant={'mainIB'} icon={<HiPlus />} /></Button>
        <ModalAddNotice isOpen={isModalOpen} onClose={handleCloseModal} />
      </Box>
    </div>
  );
};

NoticesCategoriesNav.propTypes = {
  onClick: PropTypes.func,
};
