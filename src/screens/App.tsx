import * as React from "react";
import { Routes } from "./routes"
import StatusBar from '../components/StatusBar/index';

const App = () => {
  return (
    <gridLayout rows='auto, *'>
      <Routes />
    </gridLayout>
  );
}

export default App;
