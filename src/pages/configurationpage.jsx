import {useState} from "react";
import Configuratormain from "../components/configurator/configurator";
import Navbar from "../components/configurator/navbar";

function Configurationpage(props) {
    
const [kitchen,setkitchen]=useState(true)
const [tv,settv]=useState(false)
const [bed,setbed]=useState(false)
const [foyer,setfoyer]=useState(false)


  return (
    <div>
      <Navbar kitchen={setkitchen} tv={settv} bed={setbed} foyer={setfoyer} kitchen1={kitchen} tv1={tv} bed1={bed} foyer1={foyer}   />
      <Configuratormain kitchen={kitchen} tv={tv} bed={bed} foyer={foyer}   />
    </div>
  );
}

export default Configurationpage;
