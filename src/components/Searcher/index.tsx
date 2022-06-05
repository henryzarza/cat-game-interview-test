import React from 'react';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { debounce } from '../../data/utils';

import styles from './styles.module.css';

function Searcher({ onSearch } : { onSearch: (value: string) => void; }) {
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  }, 400);

  return (
    <div className={styles.container}>
      <input
        className='base-text'
        type='search'
        name='search'
        id='search'
        placeholder='Search By Name'
        aria-label='Search By Name'
        onInput={handleChange}
      />
      <SearchIcon className={styles.icon} aria-label='Search icon' />
    </div>
  );
}

export default Searcher;
