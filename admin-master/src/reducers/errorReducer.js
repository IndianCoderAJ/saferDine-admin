const initialState = {
    errors:null
}

export default function(state = initialState, action){
    switch(action.type){
        default:{
            return {
                ...state
            }
        }
    }
}