const initialState = {
   tableRequests:null,
   tableRequestCount:null
}


export default function(state = initialState, action){
    switch(action.type){
        default:{
            return{
                ...state
            }
        }
    }
}