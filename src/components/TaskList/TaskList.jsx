import { Task } from "components/Task/Task";
import { useSelector } from "react-redux";
import { selectVisibleTasks } from "redux/selectors";

export const TaskList = () => {

  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <ul>
      {visibleTasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};