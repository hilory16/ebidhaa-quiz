
export default function(state={},action){
    switch(action.type){
        case "REGISTER_USER":
            return {...state, addUser:action.payload}
        
        case "LOGIN_USER":
            return {...state, user:action.payload}

        case "GET_AUTHENTICATED_USER":
            return {...state, user:action.payload}

        case "GET_ALL_ADMINS":
            return {...state, admin:action.payload}

        case "DELETE_USER":
            return {...state, delete_user:action.payload}

        default:
            return state
    }
}