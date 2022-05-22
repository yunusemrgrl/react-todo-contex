import { useState, useEffect } from 'react';
import { useTodo } from '../context/TodoContext';
import './TodoForm.css';

const setBackDefault = {
  text: '',
  id: '',
};

function TodoForm() {
  const { todo, setTodo, completed } = useTodo();
  const [form, setForm] = useState(setBackDefault);

  const id = new Date().getTime().toString();

  useEffect(() => {
    setForm(setBackDefault);
  }, [todo]);

  const formSubmit = (e) => {
    e.preventDefault();
    const includesItem = todo.filter((item) => {
      if (item.text === form.text) {
        return item;
      } else {
        return 0;
      }
    });

    if (
      form.text.trim() !== '' &&
      includesItem.length === 0
    ) {
      return setTodo([...todo, form]);
    } else {
      alert('todo already in list ');
    }
  };
  const formChange = (e) => {
    setForm({
      ...form,
      id: id,
      text: e.target.value,
      isCompleted: completed,
    });
  };
  return (
    <header>
      <form onSubmit={formSubmit}>
        <input
          name="text"
          value={form.text}
          onChange={formChange}
          autoComplete="off"
        />
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </header>
  );
}

export default TodoForm;
