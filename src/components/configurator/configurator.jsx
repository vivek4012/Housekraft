import React from 'react';
import Component from './component';
import Data from "../../data"
import {  useSelector } from "react-redux";

function Configurator(props) {
    const cartitem = useSelector((state) => state.cart.itemlist);

    const kitchen = cartitem.find((x) => x.id === 1);
    const tv = cartitem.find((x) => x.id === 2);
    const bed = cartitem.find((x) => x.id === 3);
    const foyer = cartitem.find((x) => x.id === 4);
 
 

    return (
        <div >


        {props.kitchen && <Component top={Data[0].top}  base={Data[0].base} id={1} default={kitchen||0}   basetext={Data[0].basetext[ kitchen?.base]} toptext= {Data[0].toptext[kitchen?.top]}   />}
        {props.tv && <Component top={Data[1].top}  base={Data[1].base} id={2} default={tv||0}  basetext={Data[1].basetext[ tv?.base]} toptext= {Data[1].toptext[ tv?.top]}  />}
        {props.bed  && <Component top={Data[2].top}  base={Data[2].base} id={3}  default={bed||0} basetext={Data[2].basetext[bed?.base]} toptext= {Data[2].toptext[bed?.top]}  />}
        {props.foyer &&   <Component top={Data[3].top}  base={Data[3].base} id={4}  default={foyer||0}  basetext={Data[3].basetext[foyer?.base]} toptext= {Data[3].toptext[foyer?.top]} />}

        </div>  
        
    );
}

export default Configurator;

 