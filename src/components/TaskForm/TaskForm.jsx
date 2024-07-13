import { useDispatch } from "react-redux";
import { Button } from "components/Button/Button";
import { addTask } from "redux/taskSlice";
import css from "./TaskForm.module.css";
import { nanoid } from "nanoid";

export const TaskForm = () => {

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    dispatch(addTask({
      id: nanoid(),
      text: form.elements.text.value,
      completed: false
    }))
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};