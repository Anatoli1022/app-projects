import { useSelector } from 'react-redux';
import styles from './Basket.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { deleteProduct } from './redux/products/actionCreators';
const cx = classNames.bind(styles);

const Basket = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const handleClick = (id) => {
    dispatch(deleteProduct({ id }));
    console.log('afaf');
  };
  return (
    <div>
      <ul>
        {product &&
          product.map((e) => {
            return (
              <li key={e.id} className={cx('item')}>
                <img src={e.image} alt="" className={cx('image')} />
                <button onClick={() => handleClick(e.id)}>delete</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Basket;
