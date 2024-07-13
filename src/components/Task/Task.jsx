import { useDispatch } from "react-redux";
import { deleteTask } from "redux/taskSlice";
import { toggleCompleted } from "redux/taskSlice";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

export const Task = ({ task }) => {

  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    
    dispatch(deleteTask(task.id))
  }

  const handleToggle = (e) => {
    e.preventDefault()

    dispatch(toggleCompleted(task.id))
  }

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose size={24} onClick={handleClick}/>
      </button>
    </div>
  );
};