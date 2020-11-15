
export default function(state={},action){
    switch(action.type){
        case "ADD_PARTICIPANT":
            return {...state, participant:action.payload}

        case "GET_ALL_PARTICIPANTS":
            return {...state, participants:action.payload}

        case "GET_ONE_PARTICIPANT":
            return {...state, participant:action.payload}

        case "UPDATE_PARTICIPANT":
            return {...state, update_participant:action.payload}

        default:
            return state
    }
}