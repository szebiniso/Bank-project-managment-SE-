import React from "react";
import { NavLink } from "react-router-dom";
import SideBarIcon from "../../../shared/ui/SideBarIcon";
import {
  SquaresPlusIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowRightOnRectangleIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import ProjectsList from "../../../entities/Projects/ui/ProjectsList";
import Drawer from "../../Drawer/Drawer";

const SideNavbar = () => {
  // const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        className="h-screen basis-20 w-full m-0
                        flex flex-col
                        bg-gray-700 text-white shadow-lg"
      >
        <div>
          <SideBarIcon icon={<RectangleStackIcon className="w-9" />} />
        </div>
        <br />
        <br />
        <br />
        <div className="flex flex-col justify-between h-screen">
          <ul>
            <li>
              <NavLink to="/projects">
                <SideBarIcon
                  title="Главная страница"
                  icon={<SquaresPlusIcon className="w-9" />}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/users">
                <SideBarIcon
                  title="Исполнители"
                  icon={<UserGroupIcon className="w-9" />}
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">
                <SideBarIcon
                  title="Статистика"
                  icon={<ChartBarIcon className="w-9" />}
                />
              </NavLink>
            </li>
          </ul>
          <NavLink to="/">
            <SideBarIcon
              title="Выход"
              icon={<ArrowRightOnRectangleIcon className="w-9" />}
            />
          </NavLink>
        </div>
      </div>
      <div
        id="drawer-example"
        className=" basis-auto fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
        // tabindex="-1"
        aria-labelledby="drawer-label"
      >
        <ProjectsList />
      </div>
    </>
  );
};

export default SideNavbar;
