import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";
import { statusFilters } from "redux/constants";
import { getTasks } from "redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);

    case statusFilters.completed:
      return tasks.filter(task => task.completed);

    default:
      return tasks;
  }
 };

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(state => state.filters.status);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

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