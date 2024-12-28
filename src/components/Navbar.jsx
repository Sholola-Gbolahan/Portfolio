import { useState } from "react";
import React from "react";
import { links } from "../data";
import { IoMenuSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const closeMobileNav = () => {
    setVisible(false);
  };

  const showMobileNav = () => {
    setVisible(true);
  };

  return (
    <>
      {/* Desktop Mode Nav */}
      <nav className="bg-black sticky top-0 z-20 hidden md:block">
        <div className="align-element py-2 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-6  justify-between">
          <h2 className="text-3xl font-bold text-white ">
            Web<span className="text-emerald-600">Dev</span>
          </h2>

          <div className="flex gap-x-6">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize text-lg text-white tracking-wide hover:text-emerald-600 duration-500">
                  {text}
                </a>
              );
            })}
          </div>
          <div className="text-white">
            <h4>08121622738</h4>
            <h4>Shololagbolahan@gmail.com</h4>
          </div>
        </div>
      </nav>

      <div className={`w-full h-[100vh] fixed z-10 ${visible ? 'visible':'hidden'} `}onClick={closeMobileNav}></div>

      {/* Mobile Nav */}
      <nav className="md:hidden  bg-black  py-6 transition ease-in sticky top-0 z-20">
        <div className="flex  items-center justify-between px-6 ">
          <h2 className="text-3xl text-center font-bold text-white ">
            Web<span className="text-emerald-600">Dev</span>
          </h2>

          <div className="">
            <button onClick={showMobileNav}>
              <IoMenuSharp className=" w-10 h-10 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Nav Open Ui */}
       


        <div
          className={`fixed h-[100vh] ${
            visible ? "translate-x-0" : " -translate-x-full"
          } transition ease-in-out delay-300 left-0 top-0 bg-black w-[300px] z-30`}>
         
          <button
            onClick={closeMobileNav}
            className="fixed top-[10px] right-[10px]">
            <MdClose className="  text-white w-6 h-6 hover:bg-emerald-500" />
          </button>
          <div className="flex flex-col gap-6 pt-12">
            <h2 className="text-3xl text-center font-bold text-white ">
              Web<span className="text-emerald-600">Dev</span>
            </h2>

            <div className="flex flex-col">
              {links.map((link) => {
                const { id, href, text } = link;
                return (
                  <a
                    key={id}
                    href={href}
                    className="capitalize text-center text-lg text-white tracking-wide  duration-500 hover:bg-emerald-600 hover:text-black p-6">
                    {text}
                  </a>
                );
              })}
            </div>
            <div className="text-white text-center mt-20">
              <h4>08121622738</h4>
              <h4>Shololagbolahan@gmail.com</h4>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
