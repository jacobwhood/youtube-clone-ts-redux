import * as React from 'react';
import { searchYouTube } from '../api/searchYoutube';


export const Search: React.SFC = () => {
  const searchInput = React.createRef<HTMLInputElement>();

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchInput.current) {
      searchYouTube(searchInput.current.value);
    }
  };

  return (
    <div className='search-container'>
      <form className='form-inline form-row align-items-center my-2 my-lg-0' id='search-form' onSubmit={handleSearch}>
        <input className='form-control mr-sm-2' type='search' id='search-input' placeholder='Search' aria-label='Search' ref={searchInput} />
        <button className='btn btn-outline-info my-2 my-sm-0' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};
