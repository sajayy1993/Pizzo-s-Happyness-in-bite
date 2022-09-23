const INIT_STATE={
    carts:[]
};

export const cartreducer=(state=INIT_STATE,action)=>{
    switch(action.type){
      case"ADD_CART":

      const itemIndex =state.carts.findIndex((item)=>item.id === action.payload.id)
      if(itemIndex >= 0){
        state.carts[itemIndex].minquan +=1
      }else{
        const temp ={...action.payload,minquan:1}
         return{
        ...state, 
        carts:[...state.carts,temp]
      }
      }
     

      case "DLT_CART":
        const data =state.carts.filter((item)=>item.id !== action.payload);

        
        return{
          ...state,
          carts:data
        }
        
        case "RMV_ONE":
          const itemIndex_dec =state.carts.findIndex((iteam)=>iteam.id === action.payload.id)
         if(state.carts[itemIndex_dec].minquan >=1){
          const dltitem = state.carts[itemIndex_dec].minquan -= 1

          return{
            ...state,
            carts:[...state.carts]
          }
         }else if(state.carts[itemIndex_dec].minquan===1){
          const data =state.carts.filter((item)=>item.id !== action.payload.id);

        
          return{
            ...state,
            carts:data
          }
          
         }

      default:
        return state
    }
}