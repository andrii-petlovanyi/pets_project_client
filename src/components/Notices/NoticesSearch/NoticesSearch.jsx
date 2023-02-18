import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export const NoticesSearch = () => {
  return (
    <form>
      <input
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
