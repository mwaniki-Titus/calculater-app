import React from 'react';
import './SearchForm.scss';
import searchIcon from '../assets/images/search-icon.png';

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="input">
        <input type="search" placeholder="Search..." />
      </div>
    </div>
  );
};

export default SearchForm;
