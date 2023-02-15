import React from 'react';
import {NavLink} from "react-router-dom";
import SideBarIcon from "../../../shared/ui/SideBarIcon";
import { SquaresPlusIcon, UserGroupIcon, ChartBarIcon, ArrowRightOnRectangleIcon, RectangleStackIcon  } from "@heroicons/react/24/solid";

const SideNavbar = () => {
    return (
        <div className="h-screen basis-20 w-full m-0
                    flex flex-col
                    bg-gray-700 text-white shadow-lg">
            <div>
                <SideBarIcon icon={<RectangleStackIcon className="w-9" />} />
            </div>
            <br/>
            <br/>
            <br/>
            <div className='flex flex-col justify-between h-screen'>
                <ul>
                    <li>
                        <NavLink to='/main_page'>
                            <SideBarIcon title='Главная страница' icon={<SquaresPlusIcon className="w-9" />} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/main_page'>
                            <SideBarIcon title='Участники' icon={<UserGroupIcon className="w-9" />} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/main_page'>
                            <SideBarIcon title='Статистика' icon={<ChartBarIcon className="w-9" />} />
                        </NavLink>
                    </li>
                </ul>
                <NavLink to='/'>
                    <SideBarIcon title='Выход' icon={<ArrowRightOnRectangleIcon className="w-9" />} />
                </NavLink>
            </div>
        </div>
    );
};

export default SideNavbar;