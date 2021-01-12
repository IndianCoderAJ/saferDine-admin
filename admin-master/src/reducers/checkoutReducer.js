const initialState = {
    pendingCheckouts:null,
    completedCheckouts:null,
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