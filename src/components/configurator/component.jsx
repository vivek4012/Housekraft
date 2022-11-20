import  {useState,useEffect}from "react";
import { cartActions } from "../../store/cartslice";
import { useDispatch  } from "react-redux";
 
function Configuratormain(props) {
  
const [base, setbase] =  useState(props.default.base || 0);
const [top, settop] = useState(props.default.top || 0);
const[design,setdesign]=useState(0)
 
const [layout1,setlayout1]=useState("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer ")
const [layout2,setlayout2]=useState("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer ")
const[laminate1 , setlaminate1] =useState("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer ")
const[laminate2 , setlaminate2] =useState("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer ")
const[laminate3 , setlaminate3] =useState("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer ")
const[laminate4 , setlaminate4] =useState("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer ")



useEffect(() => {
  if(base===0 && top===0){ setdesign(0) }
  if(base===0 && top===1){ setdesign(1) }
  if(base===0 && top===2){ setdesign(2) }
  if(base===0 && top===3){ setdesign(3) }
  if(base===1 && top===0){ setdesign(4) }
  if(base===1 && top===1){ setdesign(5) }
  if(base===1 && top===2){ setdesign(6) }
  if(base===1 && top===3){ setdesign(7) }

  if(base===0){
    setlayout1("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-500 py-3 rounded-sm hover:cursor-pointer")
    setlayout2("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer ")
  }
  if(base===1){
    setlayout1("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer ")
    setlayout2("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-500 py-3 rounded-sm hover:cursor-pointer")
  }
  if(top===0 || top===4 ){
    setlaminate1("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-500 py-3 rounded-sm hover:cursor-pointer ")
    setlaminate2("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer")
    setlaminate3("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer")
    setlaminate4("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer")
  }

  if(top===1 || top===5){
    setlaminate1("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer ")
    setlaminate2("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-500 py-3 rounded-sm hover:cursor-pointer")
    setlaminate3("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer")
    setlaminate4("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer")
  }
  if(top===2 || top===6){
    setlaminate1("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer ")
    setlaminate2("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer")
    setlaminate3("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-500 py-3 rounded-sm hover:cursor-pointer")
    setlaminate4("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer")
  }
  if(top===3 || top===7){
    setlaminate1("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer ")
    setlaminate2("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer")
    setlaminate3("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer")
    setlaminate4("btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-500 py-3 rounded-sm hover:cursor-pointer")
  }
});

  let button1 = " ";
  let button2 = false;

  if (props.default === 0) {
    button2 = true;
  } else {
    button2 = false;
  }

  if (props.default === 0) {
    button1 = "Save and add to cart";
  } else {
    button1 = "Update in cart";
  }

  const dispatch = useDispatch();

  const id = props.id;

  const add = () => {
    dispatch(
      cartActions.addToCart({
        id,
        base,
        top,
      })
    );
  };

  const remove = () => {
    dispatch(cartActions.removeFromcart(id));
  };

  return (
    <div className="xl:flex  ">
      <div className="xl:w-[55%] xl:h-full p-4  w-full">
        <div className="relative">
          <img src={props.base[base]} alt=""></img>
          <img alt="" src={props.top[design]} className="absolute top-0"></img>
        
        </div>
      </div>
      <div className="xl:w-[45%] xl:h-full w-full py-5 ">
        
        <div className="text-center my-3">Design  </div>
        <div className="w-full max-w-[400px] m-auto flex justify-around">
          <div
            className= {layout1}
            onClick={() => setbase(0)}
          >
            Design 1
          </div>
          <div
            className= {layout2}
            onClick={() => setbase(1)}
          >
            {" "}
            Design 2{" "}
          </div>
        </div>
        <div className="text-center my-5">Finishes  </div>

        <div className="w-full max-w-[400px] m-auto flex justify-around my-5">
          <div
            className= {laminate1}
            onClick={() => settop(0)}
          >
            Finish 1
          </div>
          <div
            className= {laminate2}
            onClick={() => settop(1)}
          >
           Finish 2
          </div>
        </div>
        <div className="w-full max-w-[400px] m-auto flex justify-around my-3">
          <div
            className= {laminate3}
            onClick={() => settop(2)}
          >
           Finish 3
          </div>
          <div
            className= {laminate4}
            onClick={() => settop(3)}
          >
            Finish 4
          </div>
        </div>

         

        <div className="w-full max-w-[400px] m-auto flex justify-around mt-8 hover:cursor-pointer">
          <div
            className="btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm hover:cursor-pointer "
            onClick={add}
          >
            {" "}
            {button1}{" "}
          </div>
          <button
            className={
              button2
                ? "hover:cursor-not-allowed btn-design px-7 bg-slate-100 py-3 rounded-sm hover:bg-slate-300 duration-30"
                : "btn-design hover:bg-slate-300 duration-300 px-7 bg-slate-100 py-3 rounded-sm "
            }
            disabled={button2}
            onClick={remove}
          >
            Remove from cart{" "}
          </button>
        </div>
        <div className="my-12">
           
          {props.basetext && <p className="text-center my-2">Selected Design: {props.basetext}</p>}
         { <p className="text-center my-2">Selected finish : {props.toptext} </p>}
        </div>


        
      </div>
    </div>
  );
}

export default Configuratormain;
