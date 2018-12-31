import * as React from 'react';
import Search from './Search';


export const Nav: React.FunctionComponent = () => (
  <div className='container'>
    <div className='nav-container navbar fixed-top navbar-expand-xl navbar-dark bg-dark'>
      <div className='navbar-collapse'>
        <Search />
      </div>
    </div>
  </div>
);
