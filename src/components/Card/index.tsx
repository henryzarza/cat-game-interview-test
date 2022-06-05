import Badge from '../Badge';

import styles from './styles.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <img src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg" alt="Cat" className={styles['card-image']} />
      <div className={styles['card-content']}>
        <h3 className={`small-title ${styles['text-margin']}`}>Alivia Gaines</h3>
        <span className={`base-text ${styles['text-margin']}`}>Last Activity: 2020-10-20</span>
        <span className='base-text'>Unique Opponents: 5</span>
      </div>
      <Badge className={styles.badge} rate={0.8} />
    </div>
  );
}

export default Card;
