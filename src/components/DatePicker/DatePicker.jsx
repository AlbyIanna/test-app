import styles from './date-picker.module.css'
import { useEffect, useId, useState } from 'react';

const DatePicker = ({ label, date, onChange, min, max, required }) => {
  const [error, setError] = useState(null);
  const value = toStringDate(date);
  const minValue = toStringDate(min);
  const maxValue = toStringDate(max);

  const handleChange = (e) => {
    const value = e.target.value;
    onChange(typeof date === 'string' ? value : new Date(value))
  }

  useEffect(() => {
    if (min && toDate(date) < toDate(min)) {
      setError(`Date must be after ${minValue}`)
    } else if (max && toDate(date) > toDate(max)) {
      setError(`Date must be before ${maxValue}`)
    } else {
      setError(null)
    }
  }, [date, min, max, setError, minValue, maxValue])

  const id = useId();
  return (
    <div className={styles['date-picker']}>
      {label ? <label id={`date-picker-label-${id}`}>{label}</label> : null}
      <input type="date"
        aria-labelledby={`date-picker-label-${id}`}
        aria-label='Pick a date'
        value={value}
        onChange={handleChange}
        min={minValue}
        max={maxValue}
        required={required} />
      {
        error ? (
          <div className={styles.error}>
            {error}
          </div>
        ) : null
      }
    </div>
  )
}

export default DatePicker;


function toStringDate(date) {
  return typeof date === 'string'
    ? date
    : !isNaN(date) && typeof date.toISOString === 'function'
      ? date.toISOString().substring(0, 10)
      : '';
}

function toDate(date) {
  return typeof date === 'string' ? new Date(date) : date;
}
