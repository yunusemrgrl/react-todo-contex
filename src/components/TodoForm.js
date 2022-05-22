import { useState, useEffect } from 'react';
import { useTodo } from '../context/TodoContext';

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

    if (form.text.trim() !== '') {
      return setTodo([...todo, form]);
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
        />
        <button type="submit">Add</button>
      </form>
    </header>
  );
}

export default TodoForm;
