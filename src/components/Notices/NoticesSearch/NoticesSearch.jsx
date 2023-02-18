import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const NoticesSearch = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState();
  const onInputChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={inputValue}
        onChange={onInputChange}
        type="text"
        title="Input part of notice title"
        placeholder="Search"
      />
      <button type="submit">
        <AiOutlineSearch size="24" />
      </button>
    </form>
  );
};

NoticesSearch.propTypes = {
  onSubmit: PropTypes.func,
};
