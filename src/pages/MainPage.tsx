import React from 'react';
import SideNavbar from "../widgets/sidebar/ui/SideNavbar";
import ProjectsList from "../entities/Projects/ui/ProjectsList";
import ProjectTasksTable from "../widgets/ProjectTaskTable/ui/ProjectTasksTable";

const MainPage = () => {
    return (
        <div className='flex flex-row'>
            <SideNavbar/>
            <div className='flex basis-auto w-full'>
                <ProjectsList/>
                <div className='flex basis-auto bg-main-dark w-full'>hhjbjhb</div>
                {/*<ProjectTasksTable/>*/}
            </div>
        </div>
    );
};

export default MainPage;