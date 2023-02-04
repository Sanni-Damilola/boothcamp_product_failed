import React from "react";
import { accessContest } from "./Components/Global/GlobalContext";
import AuthRoutes from "./Components/Routes/AuthRoutes";
import Routes from "./Components/Routes/Routes";
import Slider from "./Components/SideBar/SideBar";

function App() {
  const accessAll = React.useContext(accessContest);

  return (
    <div>
      <AuthRoutes />
      {accessAll?.data?.email ? null : <Slider />}
    </div>
  );
}

export default App;
