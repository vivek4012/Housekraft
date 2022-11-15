import React, { useEffect } from "react";
import Checkoutcomponent from "./checkoutcomponent";
import { useSelector } from "react-redux";
import { MdLocalShipping } from "react-icons/md";

import data from "../../data";
function Checkout(props) {
  const cartitem = useSelector((state) => state.cart.itemlist);
  const kitchen = cartitem.find((x) => x.id === 1);
  const tv = cartitem.find((x) => x.id === 2);
  const bed = cartitem.find((x) => x.id === 3);
  const foyer = cartitem.find((x) => x.id === 4);
  const [addkitchen, setaddkitchen] = React.useState(0);
  const [addtv, setaddtv] = React.useState(0);
  const [addbed, setaddbed] = React.useState(0);
  const [addfoyer, setaddfoyer] = React.useState(0);

  let cartempty = false;
  if (!kitchen && !tv && !bed && !foyer) {
    cartempty = true;
  }
  let empty = <div>"add atleast one item"</div>;
  useEffect(() => {
    if (kitchen && kitchen.base === 0) {
      setaddkitchen(0);
    }
    if (kitchen && kitchen.base === 1) {
      setaddkitchen(4);
    }

    if (tv && tv.base === 0) {
      setaddtv(0);
    }
    if (tv && tv.base === 1) {
      setaddtv(4);
    }

    if (bed && bed.base === 0) {
      setaddbed(0);
    }
    if (bed && bed.base === 1) {
      setaddbed(4);
    }

    if (foyer && foyer.base === 0) {
      setaddfoyer(0);
    }
    if (foyer && foyer.base === 1) {
      setaddfoyer(4);
    }
  });

  return (
    <div className="w-full">
      <h1 className="text-xl py-8">Shopping Cart :</h1>
      {cartempty && empty}
      {kitchen && (
        <Checkoutcomponent
          base={data[0].base[kitchen.base]}
          top={data[0].top[kitchen.top + addkitchen]}
          basetext={data[0].basetext[kitchen.base]}
          toptext={data[0].toptext[kitchen.top]}
          heading={"Kitchen"}
          price={
            data[0].baseprice[kitchen.base] + data[0].topprice[kitchen.top]
          }
        />
      )}
      {tv && (
        <Checkoutcomponent
          base={data[1].base[tv.base]}
          top={data[1].top[tv.top + addtv]}
          basetext={data[1].basetext[tv.base]}
          toptext={data[1].toptext[tv.top]}
          heading={"Living"}
          price={data[1].baseprice[tv.base] + data[1].topprice[tv.top]}
        />
      )}
      {bed && (
        <Checkoutcomponent
          base={data[2].base[bed.base]}
          top={data[2].top[bed.top + addbed]}
          basetext={data[2].basetext[bed.base]}
          toptext={data[2].toptext[bed.top]}
          heading={"Bedroom"}
          price={data[2].baseprice[bed.base] + data[2].topprice[bed.top]}
        />
      )}
      {foyer && (
        <Checkoutcomponent
          base={data[3].base[foyer.base]}
          top={data[3].top[foyer.top + addfoyer]}
          basetext={data[3].basetext[foyer.base]}
          toptext={data[3].toptext[foyer.top]}
          heading={"Wardrobe"}
          price={data[3].baseprice[foyer.base] + data[3].topprice[foyer.top]}
        />
      )}

      <div className="bg-green-500 text-white px-8 rounded-md flex justify-center items-center  w-full ">
        <MdLocalShipping />

        <p className="ml-4">Free home delivery and free installation </p>
      </div>
    </div>
  );
}

export default Checkout;
