import {SET_CURRENT_PAGE, GET_TASKS, ERROR_DATA} from "../constants";


const TASKS_start = {
    tasks:[
            {
                id: 1,
                username: 'Max',
                text: 'Learn ReactJS',
                email: 'da12@mail.ru',
                status: 0,
            },
            {
                id: 2,
                username: 'Anton',
                text: 'Learn Redux',
                email: 'da44@mail.ru',
                status: 0,
            },
            {
                id: 3,
                username: 'Marina',
                text: 'Learn React Router',
                email: 'dasd@mail.ru',
                status: 0,
            }
    ],
    errorData: {
        username: null,
        email: null,
        text: null,
        token: null
    },
    currentPage: 1,
    pageSize: 3,
    totalTaskCount: 0,
}

const taskReducer = (state = TASKS_start, action ) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload.tasks,
                totalTaskCount: action.payload.total_task_count,
            }
        case ERROR_DATA:
            return {
                ...state,
                errorData: action.payload
            }
        default:
            return state;
    }
};

export default taskReducer;
