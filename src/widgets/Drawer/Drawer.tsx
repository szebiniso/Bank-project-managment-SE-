import React, { MouseEventHandler } from "react";

interface DrawerData {
  children?: React.ReactNode;
  isOpen?: boolean | "" | undefined;
  setIsOpen?: MouseEventHandler<HTMLElement> | undefined;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerData) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-y-0  "
          : "hidden")
      }
    >
      <section
        className={
          " w-screen max-w-lg left-20 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " translate-(-x)-0 " : " translate-(-x)-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={setIsOpen}
      ></section>
    </main>
  );
};

export default Drawer;
