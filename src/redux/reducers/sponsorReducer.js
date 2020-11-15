
export default function(state={},action){
    switch(action.type){
        case "ADD_SPONSOR":
            return {...state, sponsor:action.payload}

        case "GET_ALL_SPONSORS":
            return {...state, sponsor:action.payload}

        case "GET_ONE_SPONSOR":
            return {...state, sponsor:action.payload}

        default:
            return state
    }
}