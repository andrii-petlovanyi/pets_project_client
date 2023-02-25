import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export function PaginationBar({ currentPage, countPage, setPage, ...props }) {
  return (
    <Flex gap={'10px'} {...props}>
      {currentPage !== 1 && (
        <Button
          onClick={() => setPage(currentPage - 1)}
          variant={'outlineTabActive'}
          p={'10px 10px'}
        >
          <AiOutlineLeft />
        </Button>
      )}
      {currentPage > 2 && (
        <Button
          onClick={() => setPage(1)}
          variant={'outlineTabBtn'}
          p={'10px 10px'}
        >
          1
        </Button>
      )}
      {currentPage > 3 && <div>...</div>}
      {currentPage > 1 && (
        <Button
          onClick={() => setPage(currentPage - 1)}
          variant={'outlineTabBtn'}
          p={'10px 10px'}
        >
          {currentPage - 1}
        </Button>
      )}
      <Button variant={'outlineTabActive'} p={'10px 10px'}>
        {currentPage}
      </Button>
      {currentPage < countPage && (
        <Button
          onClick={() => setPage(currentPage + 1)}
          variant={'outlineTabBtn'}
          p={'10px 10px'}
        >
          {currentPage + 1}
        </Button>
      )}
      {currentPage < countPage - 2 && <div>...</div>}
      {currentPage < countPage - 1 && (
        <Button
          p={'10px 10px'}
          onClick={() => setPage(countPage)}
          variant={'outlineTabBtn'}
        >
          {countPage}
        </Button>
      )}
      {currentPage !== countPage && (
        <Button
          p={'10px 10px'}
          onClick={() => setPage(currentPage + 1)}
          variant={'outlineTabActive'}
        >
          <AiOutlineRight />
        </Button>
      )}
    </Flex>
  );
}

PaginationBar.propTypes = {
  currentPage: PropTypes.number,
  countPage: PropTypes.number,
  setPage: PropTypes.func,
};
