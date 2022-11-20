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
 
 let kitchenselection
 let kitchenselection2
if(kitchen ===  undefined ){
    kitchenselection=2
    kitchenselection2=4
}else{
    kitchenselection= kitchen.base
    kitchenselection2= kitchen.top
}
 
let tvselection
let tvselection2
if(tv ===  undefined ){
    tvselection=2
    tvselection2=4
}else{
    tvselection=tv.base
    tvselection2=tv.top
}


let bedselection
let bedselection2
if(bed ===  undefined ){
    bedselection=2
    bedselection2=4
}else{
    bedselection=bed.base
    bedselection2=bed.top
}

let foyerselection
let foyerselection2
if(foyer ===  undefined ){
    foyerselection=2
    foyerselection2=4
}else{
    foyerselection=foyer.base
    foyerselection2=foyer.top
}
    return (
        <div >


        {props.kitchen && <Component top={Data[0].top}  base={Data[0].base} id={1} default={kitchen||0}   basetext={Data[0].basetext[kitchenselection]} toptext= {Data[0].toptext[kitchenselection2]}   />}
        {props.tv && <Component top={Data[1].top}  base={Data[1].base} id={2} default={tv||0}  basetext={Data[1].basetext[tvselection]} toptext= {Data[1].toptext[tvselection2]}  />}
        {props.bed  && <Component top={Data[2].top}  base={Data[2].base} id={3}  default={bed||0} basetext={Data[2].basetext[bedselection]} toptext= {Data[2].toptext[bedselection2]}  />}
        {props.foyer &&   <Component top={Data[3].top}  base={Data[3].base} id={4}  default={foyer||0}  basetext={Data[3].basetext[foyerselection]} toptext= {Data[3].toptext[foyerselection2]} />}

        </div>  
        
    );
}

export default Configurator;

 