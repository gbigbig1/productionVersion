import {
    CHANGE_FILTER,
    GET_TASKS,
    SET_CURRENT_PAGE,
    SET_USER_DATA,
    ERROR_LOGIN, ERROR_DATA,
} from "../constants";

import {authApi, taskApi} from "../api/api";

export const changeFilter = activeFilter => ({
    type: CHANGE_FILTER,
    activeFilter,
})

export const getTasks = (payload) => ({
    type: GET_TASKS,
    payload,
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})

export const setUserData = (login, token, isAuth) => ({
    type: SET_USER_DATA,
    login,
    token,
    isAuth,
})

export const errorLogin = (payload) => ({
    type: ERROR_LOGIN,
    payload,
})

export const errorData = (payload) => ({
    type: ERROR_DATA,
    payload,
})



//redux-thunk
export const getTasksThunkCreator = (PageNumber = 1) => async (dispatch) => {
    dispatch(setCurrentPage(PageNumber))
    const response = await taskApi.getTasks(PageNumber)
    response.status === 'ok'
        ? dispatch(getTasks(response.message))
        : console.error(response.message)
}

export const addNewTaskThunkCreator = (usernameInp, emailInp, textTaskInp) => async (dispatch) =>  {
    debugger
    let form = new FormData()
    form.append("username", usernameInp)
    form.append("email", emailInp)
    form.append("text", textTaskInp)

    const response = await taskApi.addNewTask(form)

    response.status === 'ok'
        ? dispatch(getTasksThunkCreator())
        : dispatch(errorData(response.message))
}

export const saveEditTaskThunkCreator = (id, textTaskInp, status, token, currentPage) => async (dispatch) => {
    status ? status = 10 : status = 0;
    let form = new FormData()
    form.append("text", textTaskInp)
    form.append("status", status)
    form.append("token", token)
    debugger
    const response = await taskApi.saveEditTask(id, form)
    response.status === 'ok'
        ? dispatch(getTasksThunkCreator(currentPage))
        : dispatch(errorData(response.message))
}

export const loginThunkCreator = (login = 'admin', password = '123') => async (dispatch) => {
    let form = new FormData()
    form.append("username", login)
    form.append("password", password)

    const response = await authApi.login(form)
    response.status === 'ok'
        ? dispatch(setUserData(login, response.message.token, true))
        : dispatch(errorLogin(response.message))
}





