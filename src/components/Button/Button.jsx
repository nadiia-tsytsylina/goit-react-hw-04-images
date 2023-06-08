import PropTypes from 'prop-types';
import css from './Button.module.css';

export default function Button({ onCLick }) {
  return (
    <button className={css.Button} type="button" onClick={onCLick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onCLick: PropTypes.func.isRequired,
};
