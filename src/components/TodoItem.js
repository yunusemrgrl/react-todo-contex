import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItem({ item }) {
  const { todo, setTodo } = useTodo();
  const [editFlag, setEditFlag] = useState(false);
  const [newValue, setNewValue] = useState();
  const newId = new Date().getTime().toString();

  const handleEdit = () => {
    setEditFlag(true);
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleSubmit = (id) => {
    if (newValue.trim() !== '') {
      todo.forEach((item) => {
        if (item.id !== id) {
          setTodo([...todo]);
        } else {
          console.log(item);
          item.text = newValue;
          item.id = newId;
        }
      });
      setEditFlag(false);
      return setTodo([...todo]);
    }
  };

  return (
    <li className="todo-item">
      {!editFlag && (
        <>
          <label className="todo-item-text">
            {item.text}
          </label>
          <div className="icons">
            <FontAwesomeIcon
              className="icon editBtn"
              icon={faEdit}
              onClick={handleEdit}
            />
            <FontAwesomeIcon
              className="icon deleteBtn"
              icon={faDeleteLeft}
              onClick={() => handleDelete(item.id)}
            />
          </div>
        </>
      )}
      {editFlag && (
        <>
          <input
            name="text"
            value={newValue ? newValue : item.text}
            onChange={(e) => handleChange(e, item.text)}
          />
          <div className="icons">
            <FontAwesomeIcon
              className="icon okey"
              icon={faCheckCircle}
              onClick={() => handleSubmit(item.id)}
            />
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
