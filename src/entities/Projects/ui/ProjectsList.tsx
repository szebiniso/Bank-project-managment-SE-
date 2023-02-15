import React from 'react';
import ProjectCard from "../../../shared/ui/ProjectCard";
import SearchForm from "../../../features/searchFrom/ui/SearchForm";

const ProjectsList = () => {
    return (
        <div className='w-full h-screen bg-[#202938] flex flex-col basis-1/3 p-6'>
            <p className='text-3xl text-gray-100 mb-6 font-semibold'>Проекты</p>
            <SearchForm/>
            <ul className='w-full flex flex-col gap-1 overflow-auto'>
                <li><ProjectCard title='Первый проект' description='Какое-то описание для первого проекта'/></li>
                <li><ProjectCard title='Второй проект' description='Какое-то описание для второго проекта'/></li>
                <li><ProjectCard title='Второй проект' description='Какое-то описание для второго проекта'/></li>
                <li><ProjectCard title='Второй проект' description='Какое-то описание для второго проекта'/></li>
                <li><ProjectCard title='Второй проект' description='Какое-то описание для второго проекта'/></li>
                <li><ProjectCard title='Второй проект' description='Какое-то описание для второго проекта'/></li>
                <li><ProjectCard title='Второй проект' description='Какое-то описание для второго проекта'/></li>
                <li><ProjectCard title='Второй проект' description='Какое-то описание для второго проекта'/></li>
                <li><ProjectCard title='Второй проект' description='Какое-то описание для второго проекта'/></li>
                <li><ProjectCard title='Второй проект' description='Какое-то описание для второго проекта'/></li>
                <li><ProjectCard title='Второй проект' description='Какое-то описание для второго проекта'/></li>
            </ul>
        </div>
    );
};

export default ProjectsList;