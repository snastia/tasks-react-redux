import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/filterSlice";
import { Button } from "components/Button/Button";
import { getFilters } from "redux/selectors";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getFilters);

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter))
  }

  return (
    <div className={css.wrapper}>
      <Button 
      selected={filter === 'all'}
      onClick={() => handleFilterChange(statusFilters.all)}>All</Button>

      <Button 
      selected={filter === 'active'}
      onClick={() => handleFilterChange(statusFilters.active)}>Active</Button>

      <Button 
      selected={filter === 'completed'}
      onClick={() => handleFilterChange(statusFilters.completed)}>Completed</Button>
    </div>
  );
};