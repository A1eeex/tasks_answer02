import React, {FC} from 'react';
import styled from "./Search.module.css";

interface SearchTypes{
  onChange: any
  value:any
}

const Search:FC<SearchTypes> = ({onChange, value}) => {
  return (
    <div className={ styled.searchContainer }>
      <div>Search:</div>
      <input
        onChange={ onChange }
        value={ value }
        type="text"
        placeholder='Search...'/>
    </div>
  );
};

export default Search;