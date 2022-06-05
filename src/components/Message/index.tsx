import Error from '../../assets/error.jpg';
import NoData from '../../assets/no-data.jpg';

import styles from './styles.module.css';

function Message({ message, isError } : { message: string; isError?: boolean; }) {
  return (
    <div className={`${styles.container} ${isError ? styles.full : styles.fit}`}>
      <h6 className={`small-title ${styles.title}`}>{message}</h6>
      <img src={isError ? Error : NoData} alt="Empty data" className={styles.img} />
    </div>
  );
}

export default Message;
