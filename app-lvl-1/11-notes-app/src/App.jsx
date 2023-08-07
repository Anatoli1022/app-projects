import classNames from 'classnames/bind';
import styles from './App.module.scss';
import TodoForm from './components/TodoForm';
import { useState } from 'react';
import TodoList from './components/TodoList';

const cx = classNames.bind(styles);

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };
  return (
    <div className={cx('app')}>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
