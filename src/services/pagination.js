import React from 'react';
import PropTypes from 'prop-types';

import { Button, IconButton } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export function PaginationBar({ currentPage, countPage, setPage, ...props }) {
  return (
    <Flex gap={'10px'} {...props}>
      {currentPage === 1 ? (
        ''
      ) : (
        <IconButton
          onClick={() => setPage(currentPage - 1)}
          variant={'mainIB'}
          icon={<AiOutlineLeft />}
        />
      )}
      {currentPage > 2 ? (
        <Button onClick={() => setPage(1)} variant={'mainIB'} size={'sm'}>
          1
        </Button>
      ) : (
        ''
      )}
      {currentPage > 3 ? <div>...</div> : ''}
      {currentPage > 1 ? (
        <Button onClick={() => setPage(currentPage - 1)} variant={'mainIB'}>
          {currentPage - 1}
        </Button>
      ) : (
        ''
      )}
      <Button variant={'mainIB'}>{currentPage}</Button>
      {currentPage < countPage ? (
        <Button onClick={() => setPage(currentPage + 1)} variant={'mainIB'}>
          {currentPage + 1}
        </Button>
      ) : (
        ''
      )}
      {currentPage < countPage - 2 ? <div>...</div> : ''}
      {currentPage < countPage - 1 ? (
        <Button onClick={() => setPage(countPage)} variant={'mainIB'}>
          {countPage}
        </Button>
      ) : (
        ''
      )}
      {currentPage === countPage ? (
        ''
      ) : (
        <IconButton
          onClick={() => setPage(currentPage + 1)}
          variant={'mainIB'}
          icon={<AiOutlineRight />}
        />
      )}
    </Flex>
  );
}

PaginationBar.propTypes = {
  currentPage: PropTypes.number,
  countPage: PropTypes.number,
  setPage: PropTypes.func,
};
