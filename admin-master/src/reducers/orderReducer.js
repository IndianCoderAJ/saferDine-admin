import {GET_ORDERCOUNT } from "../actions/types";

const initialState = {
   pendigOrderCount:null,
   activeOrderCount:null,
   completedOrderCount:null,
   pendingOrder:{
       pageNO:null,
       pendingOrders:null,
   },
   activeOrder:{
    pageNO:null,
    activeOrders:null,
   },
   completedOrder:{
    pageNO:null,
    completedOrders:null,
   }
};


export default function(state =  initialState, action){
    switch(action.type){
        default: {
            return {
            ...state
            }   
        }
    }

}