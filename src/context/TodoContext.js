import { useContext, createContext } from 'react';
import { useState, useEffect } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('list'));
    if (items !== null) {
      setTodo(items);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todo));
  }, [todo]);

  const values = {
    todo,
    setTodo,
  };

  return (
    <TodoContext.Provider value={values}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
