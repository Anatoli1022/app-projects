import styles from './TodoItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoItem = ({ todo, deleteTodo, index }) => (
  <li onDoubleClick={() => deleteTodo(index)} className={cx('item')}>
    {todo}
  </li>
);

export default TodoItem;
