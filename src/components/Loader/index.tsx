import styles from './styles.module.css';

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
      <h2 className='base-text'>Loading...</h2>
    </div>
  );
}

export default Loader;
