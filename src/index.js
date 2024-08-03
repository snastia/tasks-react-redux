import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { Provider } from "react-redux";
import { persistor, store } from 'redux/store'
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);
