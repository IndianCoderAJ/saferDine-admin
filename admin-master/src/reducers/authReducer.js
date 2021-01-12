const initialState = {
    isAuthenticated:false,
    adminData:null,
}


export default function(state = initialState,action){
   
    switch(action.type){
        default: {
            return {
                ...state
            }  
        }
    }

}