import React from "react";
import SideNavbar from "../../widgets/sidebar/ui/SideNavbar";
import ProjectOptionWidget from "../../widgets/ProjectOptionWidget/ui";
import UsersList from "../../entities/Users/ui";

const UsersPage = () => {
  return (
    <div className="flex flex-row">
      <SideNavbar />
      <div className="flex basis-auto w-full">
        <div className="flex basis-auto bg-main-dark w-full">
          <UsersList />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
