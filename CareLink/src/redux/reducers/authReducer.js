const INITIAL_STATE = {
    user: false,
    usertype:null
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case "User" :
        return {...state, user: action.payload}
        case "UserType" :
        return {...state, usertype: action.payload}
        default:
            return state
    }
}