import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import  './pages.css'
function Home() {
  return (
    <div className="font2">
      {/* <Link to="configuration" >
        <div>
            home 
        </div>
        </Link> */}
      <div className="">
        <img alt=""
          className="-z-50 w-[100vw] h-[100vh] fixed opacity-[90%] object-cover"
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
      </div>
      <section className="flex justify-between flex-col h-[100vh]">
        <nav className="w-[85vw] h-[4rem] mx-auto flex justify-between items-center px-10">
          <section className="text-white">
            <span className="text-[18px]">House</span>
            <span className="text-[18px] font-bold">Krafts</span></section>
          <section className="flex text-white items-center">
            <div className="px-4 hidden md:flex">Blore India</div>
            <div className="px-4 hidden md:flex">+91 9686274029</div>
            <div className="px-4  text-white bg-[#232324] py-2 flex items-center">
              <section className="px-1 md:px-3 text-center">Architecture {`&`} Design </section>
              {/* <section className="md:hidden"><AiOutlineEllipsis /></section> */}
            </div>
          </section>
        </nav>
        <div className="w-[80vw] m-auto text-[50px] md:text-[75px] font-semibold flex justify-center md:justify-start text-white">
          <span className="backdrop-blur-[3px] px-12 -translate-y-[100px] font3">
            <span className="text-xl">START </span>
             <span className="">Krafting</span>
             </span>
        </div>
      <Link to="configuration" >
        <div className="py-6 bg-white w-[50vw] max-w-[650px] flex justify-center items-center m-5 rounded-md hover:scale-105 hover:bg-slate-200 duration-300">

          <section className="px-2 text-center ">
            Royal towers Apartments
          </section>

          <section className="pr-5">
            <BsArrowRight />
          </section>
        </div>
        </Link>
      </section>
    </div>
  );
}

export default Home;
