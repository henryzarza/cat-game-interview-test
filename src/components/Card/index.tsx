import Badge from '../Badge';

import styles from './styles.module.css';

export interface CardProps {
  lastActivityDate: Date;
  fullName: string;
  avatar: string;
  uniqueOponents: number;
  rate: number;
}

function Card({ data } : { data : CardProps }) {
  const { lastActivityDate, fullName, avatar, uniqueOponents, rate } = data;

  return (
    <div className={styles.card}>
      <img src={avatar} alt={fullName} className={styles['card-image']} />
      <div className={styles['card-content']}>
        <h3 className={`small-title ${styles['text-margin']}`}>{fullName}</h3>
        <span className={`base-text ${styles['text-margin']}`}>Last Activity: {lastActivityDate.toISOString().split('T')[0]}</span>
        <span className='base-text'>Unique Opponents: {uniqueOponents}</span>
      </div>
      <Badge className={styles.badge} rate={rate} />
    </div>
  );
}

export default Card;
