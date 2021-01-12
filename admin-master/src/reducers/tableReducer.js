const initialState = {
    pendingTableRequests:null,
    activeTableRequests:null,
    rejectedTableRequests:null
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