import * as React from 'react';
import { connect } from 'react-redux';

import { searchYouTubeAsync } from '../actions/actions';
import { State } from '../types/types';

interface ISearchProps {
  onSubmitSearch: (query: string) => void;
}


const Search: React.SFC<ISearchProps> = ({ onSubmitSearch }) => {
  const searchInput = React.createRef<HTMLInputElement>();

  return (
    <div className='search-container'>
      <form
        className='form-inline form-row align-items-center my-2 my-lg-0'
        id='search-form'
        onSubmit={(e) => {
          e.preventDefault();
          searchInput.current ? onSubmitSearch(searchInput.current.value) : null;
        }}
      >
        <input className='form-control mr-sm-2' type='search' id='search-input' placeholder='Search' aria-label='Search' ref={searchInput} />
        <button className='btn btn-outline-info my-2 my-sm-0' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  onSubmitSearch: (query: string) => dispatch(searchYouTubeAsync(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
