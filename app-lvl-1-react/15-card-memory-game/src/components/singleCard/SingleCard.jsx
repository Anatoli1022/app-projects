import classNames from 'classnames/bind';
import styles from './SingleCard.module.scss';
import cover from '../../images/cover.jpg';
const cx = classNames.bind(styles);
const SingleCard = ({ card, handleChoise, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoise(card);
    }
  };
  return (
    <div className={cx('card')}>
      <div>
        <img
          src={card.image}
          alt=""
          className={cx('front', 'image', flipped ? 'flipped' : '')}
        />
        <img
          src={cover}
          alt=""
          className={cx('image','cover' ,flipped ? 'cover-flipped' : '')}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
