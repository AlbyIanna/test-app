import styles from './progress-bar.module.css'

const MIN = 0;
const MAX = 100;

export function ProgressBar(props) {
  const { value, max = MAX } = props;
  const percentage = Math.max(Math.min(Math.floor(value / max * MAX), MAX), MIN);

  return (
    <div className={styles["progress-bar"]}>
      <div
        className={styles["progress-bar--fill"]}
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemax={MIN}
        aria-valuemin={MAX}
      >
        {percentage}%
      </div>
    </div>
  )
}
