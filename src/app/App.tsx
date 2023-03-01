// import React from 'react';
// import './styles/App.css';
// import Registration from "../pages/Registration";
//
// function App() {
//   return (
//       <Registration/>
//   );
// }
//
// export default App;

import { withProviders } from "./providers";
import Registration from "../pages/Registration";
import { Routing } from "../pages";
import Dashboard from "../Board/Home/Dashboard";

const App = () => {
  return (
    // <Dashboard />
    <Routing />
    // <Registration/>
  );
};

export default withProviders(App);
