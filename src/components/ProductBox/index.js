import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import { validateSearch } from '../validations';

import './style.sass';

export const onClick = (onSearch, setInput) => async (search) => {
  if (validateSearch(search)) {
    setInput(search);
    onSearch(true);
  }
};

export const ProductBox = () => {
  const [input, setInput] = useState('');
  const [isSearch, onSearch] = useState(false);

  if (isSearch) {
    return (
      <Redirect
        push
        to={{
          pathname: `/item/search/${input}`,
        }}
      />
    );
  }

  return (
    <SearchBar key="searchBar_productBox" initInput={input} onClick={onClick(onSearch, setInput)} />
  );
};

export default { ProductBox, onClick };
