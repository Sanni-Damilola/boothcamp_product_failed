import React from "react";
import { accessContest } from "./Components/Global/GlobalContext";
import AuthRoutes from "./Components/Routes/AuthRoutes";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  const accessAll = React.useContext(accessContest);

  return (
    <div>
      <AuthRoutes />
      {accessAll?.data!.name ? <SideBar /> : null}
    </div>
  );
}

export default App;
