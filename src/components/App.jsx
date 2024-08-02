import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { getTasks } from "redux/operations";

export const App = () => {
const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])
  
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};