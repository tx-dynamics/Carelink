export const setUser = (data) => async (dispatch) => {
    dispatch({type: "User" , payload : data})
}
export const setUserType = (data) => async (dispatch) => {
    dispatch({type: "UserType" , payload : data})
}
