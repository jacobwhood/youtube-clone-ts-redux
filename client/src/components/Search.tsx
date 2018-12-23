import * as React from 'react';
import { searchYouTube } from '../api/searchYoutube';


export const Search: React.SFC = () => {
  const searchInput = React.createRef<HTMLInputElement>();

  function handleSearch() {
    if (searchInput.current) {
      searchYouTube(searchInput.current.value);
    }
  };

  return (
    <div className='search-container'>
      <input type='text' ref={searchInput} />
      
      <button onClick={handleSearch}>
        Click me!!
      </button>
    </div>
  );
};
