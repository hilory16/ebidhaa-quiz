import {combineReducers}  from 'redux';
import User from './userReducer';
import Sponsor from './sponsorReducer';
import Participant from './participantReducer'

const rootReducer = combineReducers({
    User,
    Sponsor,
    Participant
})

export default rootReducer