import s from 'components/Notification/Notification.module.css';
import PropTypes from 'prop-types';

export default function Component({ message }) {
  return <p className={s.notification}>{message}</p>;
}

Component.propTypes = {
  message: PropTypes.string.isRequired,
};
