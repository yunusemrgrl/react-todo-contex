import { useContext, createContext } from 'react';
import { useState, useEffect } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  const values = {
    todo,
    completed,
    setTodo,
    setCompleted,
  };
  return (
    <TodoContext.Provider value={values}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
