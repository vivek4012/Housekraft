import React from "react";
import { Link } from "react-router-dom";
import {  AiOutlineArrowDown } from "react-icons/ai"; 

function Navbar(props) {
  const[change,setchange]=React.useState(false)

  function kitchen() {
    props.kitchen(true);
    props.tv(false);
    props.bed(false);
    props.foyer(false);
  }
  function tv() {
    props.kitchen(false);
    props.tv(true);
    props.bed(false);
    props.foyer(false);
  }
  function bed() {
    props.kitchen(false);
    props.tv(false);
    props.bed(true);
    props.foyer(false);
  }

  function foyer() {
    props.kitchen(false);
    props.tv(false);
    props.bed(false);
    props.foyer(true);
  }
function change2(){
setchange(x=>!x)
}


let heading ="" 

if(props.kitchen1){heading ="kitchen" }
if(props.tv1){heading ="Living" }
if(props.bed1){heading ="bed" }
if(props.foyer1){heading ="Wardrobe" }




  return ( 
    <div className="w-full bg-slate-100"> 
    <div className="w-[80vw] m-auto relative h-[60px] flex justify-between items-center  ">
      <div>Configurator</div>
      <div onClick={change2} className="justify-between relative px-6 py-1  bg-slate-300 hover:bg-slate-500w-[130px] rounded flex items-center hover:cursor-pointer hover:bg-slate-500"> {heading}<AiOutlineArrowDown/>
      <div className={change?"  bg-white py-2 px-4 z-[999] absolute top-10 rounded w-[150px] drop-shadow-xl left-[-20px] ":"hidden"}>
        <div onClick={kitchen} className="my-1 hover:bg-slate-200" > kitchen </div>
        <hr/>
        <div onClick={tv}  className="my-1 hover:bg-slate-200"> Living </div>
        <hr/>
        <div onClick={bed}  className="my-1 hover:bg-slate-200"> bed </div>
        <hr/>
        <div onClick={foyer}  className="my-1 hover:bg-slate-200"> Wardrobe </div>
      </div>
      </div>
      <Link to={"/Checkout"}>
        <div className="hover: cursor-pointer bg-slate-300 hover:bg-slate-500 px-6 py-1 rounded ">Cart</div>
      </Link>
    </div>
    </div> 
  );
}

export default Navbar;
