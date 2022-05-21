import { useState, useEffect } from 'react';
import { useTodo } from '../context/TodoContext';

const setBackDefault = {
  text: '',
  id: '',
};
function TodoForm() {
  const { todo, setTodo, completed } =
    useTodo(setBackDefault);
  const [form, setForm] = useState('');

  const id = new Date().getTime().toString();

  useEffect(() => {
    setForm(setBackDefault);
  }, [todo]);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(form.text);

    return setTodo([...todo, form]);
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
    <form onSubmit={formSubmit}>
      <input
        name="text"
        value={form.text}
        onChange={formChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
