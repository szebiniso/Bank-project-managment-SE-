import React from 'react';
import {NavLink} from "react-router-dom";

const SideMenuButton = (props: {title: string, link: string, children: string | JSX.Element | JSX.Element[]}) => {
    return (
        <>
            <NavLink to={props.link}>
               <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true"
                         className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        {props.children}
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">{props.title}</span>
               </div>
            </NavLink>
        </>
    );
};

export default SideMenuButton;