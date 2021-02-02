import axios from "axios";

const instance = axios.create({
    baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/v2/',
})

export const taskApi = {
    getTasks (pageNumber = 1) {
        return instance.get(`?developer=Test&page=${pageNumber}`)
            .then(response => {
                return response.data
            })
    },

    addNewTask (form)  {
        return instance.post(`create?developer=Test`, form)
            .then(response => {
            return response.data
        })
    },

    saveEditTask (id, form)  {
        return instance.post(`edit/${id}?developer=Test`, form)
            .then(response => {
                return response.data
        })
    },
}

export const authApi = {
    login (form) {
        return instance.post(`login?developer=Test`, form )
            .then(response => {
                return response.data
            })
    }
}


