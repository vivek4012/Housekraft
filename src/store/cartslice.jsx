import { createSlice } from "@reduxjs/toolkit"; 

const cartslice = createSlice({
name:"cart" ,
initialState:{
itemlist:[]
},
reducers:{
    addToCart(state,action){
    const newItem= action.payload 
const existing = state.itemlist.find((x)=>x.id===newItem.id)
if (existing){
    existing.base=newItem.base
    existing.top=newItem.top
}else{
    state.itemlist.push({
     id:newItem.id,
     base:newItem.base,
     top:newItem.top
    })
}
},
removeFromcart(state,action){
    const removeitem = action.payload
    console.log(action.payload)
    state.itemlist=state.itemlist.filter(x=>x.id!==removeitem)
},
}
})
export const cartActions =   cartslice.actions;
 

export default cartslice;