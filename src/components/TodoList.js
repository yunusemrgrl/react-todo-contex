import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';
import './TodoList.css';
const TodoList = () => {
  const { todo } = useTodo();

  return (
    <main className="content">
      <ul className="todo-list">
        {todo.map((item, index) => (
          <TodoItem item={item} key={index} />
        ))}
      </ul>
    </main>
  );
};
export default TodoList;
