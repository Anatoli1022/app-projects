import { useState } from 'react';
import styles from './TodoForm.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div className={cx('todo')}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="enter new todo"
          className={cx('input')}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default TodoForm;
