import styles from './styles.module.css';

interface Props {
  className?: string;
  rate: number;
}

const getBadgeColor = (rate: number) => {
  if (rate === 0) {
    return styles.red;
  } else if (rate > 0 && rate < 0.25) {
    return styles.yellow;
  } else if (rate >= 0.25 && rate < 0.75) {
    return styles.green;
  }
  return styles.blue;
}

function Badge({ className = "", rate } : Props) {
  return (
    <h6 className={`small-title fw-normal text-white ${styles.badge} ${className} ${getBadgeColor(rate)}`}>
      {rate}
    </h6>
  );
}

export default Badge;
