import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const NoticesSearch = ({ onSubmit }) => {
  const params = useLocation();
  let search = decodeURI(params.search).split('=').at(-1);

  const [, setSearchParams] = useSearchParams();

  const onInputChange = e => {
    e.preventDefault();
    const { value } = e.target;

    setSearchParams({ search: value });
  };

  return (
    <InputGroup
      as="form"
      maxW={{ base: '280px', lg: '608px' }}
      display={'flex'}
      alignItems={'center'}
      onSubmit={onSubmit}
    >
      <Input
        variant={'search'}
        value={search}
        onChange={onInputChange}
        type="text"
        title="Input part of notice title"
        placeholder="Search"
      />
      <InputRightElement
        height={{ base: '40px', lg: '44px' }}
        my={{ base: '28px', lg: '40px' }}
        type="submit"
        _hover={{ cursor: 'pointer' }}
      >
        <AiOutlineSearch size={'24'} />
      </InputRightElement>
    </InputGroup>
  );
};

NoticesSearch.propTypes = {
  onSubmit: PropTypes.func,
};
