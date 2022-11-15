import React from "react";
import { Link } from "react-router-dom";
 

function Checkoutcomponent(props) { 
 
  return (
    <div className="flex justify-between md:min-w-[60%] py-2 flex-col md:flex-row mb-10">
      <section className="flex">
        <div className="mr-8 xl:mr-[24rem] object-cover relative">
          <img
            alt=""
            className="w-[100px] h-[100px] object-cover rounded-lg"
            src= {props.base}
          />
          <img
            alt=""
            className="w-[100px] h-[100px] object-cover rounded-lg absolute top-0"
            src= {props.top}
          />
        </div>
        <div>
          <p className="text-xl">{props.heading}</p>
          <p className="text-sm">Selected Design: {props.basetext}</p>
          <p className="text-sm">Selected finish : {props.toptext} </p>
        </div>
      </section>
      <section className="font-semibold flex flex-col">
        <p>Price : Rs {props.price}</p> 
        <Link to ={"/configuration"}>
        <button className="bg-slate-100 py-2 my-2 rounded-md w-full">Edit</button>
        </Link  >
        
      </section>
        </div>
 
  );
}

export default Checkoutcomponent;
