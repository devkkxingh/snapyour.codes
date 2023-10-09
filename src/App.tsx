import React from "react";
import "./App.css";
import CodeBox from "./components/Code/CodeBox";
import Dashboard from "./components/Layout/Dashboard";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

function App() {
  return (
    <div className="App">
      {/* <CodeBox /> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Dashboard />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
