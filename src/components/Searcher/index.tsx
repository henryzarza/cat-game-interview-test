import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import styles from './styles.module.css';

function Searcher() {
  return (
    <div className={styles.container}>
      <input
        className='base-text'
        type='search'
        name='search'
        id='search'
        placeholder='Search By Name'
        aria-label='Search By Name'
      />
      <SearchIcon className={styles.icon} aria-label='Search icon' />
    </div>
  );
}

export default Searcher;
