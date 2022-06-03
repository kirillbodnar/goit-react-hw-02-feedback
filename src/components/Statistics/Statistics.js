import s from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <>
      <p className={s.item}>Good: {good}</p>
      <p className={s.item}>Neutral: {neutral}</p>
      <p className={s.item}>Bad: {bad}</p>
      <p className={s.item}>Total: {total}</p>
      <p className={s.item}>Positive feedback: {percentage}%</p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
