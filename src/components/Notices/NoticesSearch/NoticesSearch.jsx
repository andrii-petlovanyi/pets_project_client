import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export const NoticesSearch = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = e => {
    const { value } = e.target;
    setInputValue(() => value);
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
        value={inputValue}
        onChange={onInputChange}
        type="text"
        title="Input part of notice title"
        placeholder="Search"
      />
      <InputRightElement
        height={{ base: '40px', lg: '44px' }}
        my={{ base: '28px', lg: '40px' }}
        type="submit"
      >
        <AiOutlineSearch size={'24'} />
      </InputRightElement>
    </InputGroup>
  );
};

NoticesSearch.propTypes = {
  onSubmit: PropTypes.func,
};
