import styles from './TodoList.module.scss';
import classNames from 'classnames/bind';
import TodoItem from './TodoItem';

const cx = classNames.bind(styles);

const TodoList = ({ todos, deleteTodo }) => (
  <ul className={cx('list')}>
    {!todos.length && <h4 className={cx('text')}>the task list is empty</h4>}
    {todos.map((todo, index) => (
      <TodoItem todo={todo} deleteTodo={deleteTodo} key={index} index={index} />
    ))}
  </ul>
);

export default TodoList;
