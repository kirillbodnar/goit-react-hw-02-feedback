import s from 'components/Notification/Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className={s.notification}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
