import * as React from 'react';
import { searchYouTube } from '../api/searchYoutube';

export const Search: React.FunctionComponent = () => (
  <div className='search-container'>
    <button onClick={() => searchYouTube('arsenal fc')}>
      Click me!!
    </button>
  </div>
);
