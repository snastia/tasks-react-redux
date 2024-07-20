import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "store";

export const App = () => {
  const counterValue = useSelector(state => state.value)
  const dispatch = useDispatch()

  const handleIncrement = (e) => {
    e.preventDefault()

    dispatch(incrementCounter(1))
  }

  return (
    <>
     <h1>Counter</h1>
     <p>Значення counter: 0</p>
     <button onClick={handleIncrement} type="button">Збільшити</button>
    </>
  )
};