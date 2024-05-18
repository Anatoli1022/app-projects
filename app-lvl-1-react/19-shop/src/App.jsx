import { useEffect, useState } from 'react';
import styles from './App.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { addProduct } from './redux/products/actionCreators';
import Basket from './basket';

const cx = classNames.bind(styles);

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const info = await res.json();

        setData(info);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  const handleClick = (e) => {
    dispatch(addProduct(e));
    console.log('afaf');
  };
  console.log(data);
  return (
    <div className={cx('container')}>
      <ul className={cx('list')}>
        {data &&
          data.map((e) => {
            return (
              <li key={e.id} className={cx('item')}>
                <img src={e.image} alt="" className={cx('image')} />

                <div className={cx('wrapper')}>
                  <p className={cx('product-title')}>{e.title}</p>
                  <span className={cx('price')}>{e.price}$</span>
                  <button onClick={() => handleClick(e)}>Add</button>
                </div>
              </li>
            );
          })}
      </ul>

      <Basket />
    </div>
  );
};

export default App;
