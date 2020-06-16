import React from "react";
import SidebarLayout from "./components/layout/SidebarLayout";

import { useTypedSelector } from "./store/reducers/index";

function App() {
  const state = useTypedSelector((state) => state);

  console.log(state.appConfig.nunu);
  return <SidebarLayout />;
}

export default App;
