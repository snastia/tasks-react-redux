import { Layout } from "components/Layout";
import { AppBar } from "components/Auth/AppBar";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { getTasks } from "redux/operations";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { RegPage } from "pages/RegPage/RegPage";
import { TasksPage } from "pages/TasksPages/TasksPage";

export const App = () => {
const dispatch = useDispatch()

console.log('dfgfhf')

  useEffect(() => {
    console.log('kkkff')
    dispatch(getTasks())
  }, [dispatch])
  
  return (
    <Layout>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/registration" element={<RegPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/tasks" element={<TasksPage/>}/>
      </Routes>
    </Layout>
  );
};