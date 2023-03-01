import React from "react";
import SideNavbar from "../../widgets/sidebar/ui/SideNavbar";
import ProjectOptionWidget from "../../widgets/ProjectOptionWidget/ui";
import Dashboard from "../../Board/Home/Dashboard";

const MainPage = () => {
  return (
    <>
      <ProjectOptionWidget />
      <div className="flex basis-auto bg-main-dark w-full">
        <Dashboard />
        {/*<Trello />*/}
      </div>
    </>
  );
};

export default MainPage;
