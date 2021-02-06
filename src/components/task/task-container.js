import React, {Component} from "react";
import {connect} from 'react-redux';

import {
    changeFilter,
    getTasksThunkCreator,
    addNewTaskThunkCreator,
    loginThunkCreator,
    saveEditTaskThunkCreator
} from "../../actions/actionCreator";
import Task from "./task";


class TaskContainer extends Component {

    state = {
        isEditMode: false,
        idEditTask: '',
        isAddNewTask: false,
        usernameInp: '',
        emailInp: '',
        textTaskInp: '',
        status: 0,
        loginInput: '',
        pasInput: '',
    }

    initializeState = () => {
        this.setState({
            isEditMode: false,
            idEditTask: '',
            isAddNewTask: false,
            usernameInp: '',
            emailInp: '',
            textTaskInp: '',
            status: 0,
        })
    }

    handlerEditMode = (id, username, email, text, status) => {
        let {isEditMode} = this.state
        this.setState({
            isEditMode: !isEditMode,
            idEditTask: id,
            usernameInp: username,
            emailInp: email,
            textTaskInp: text,
            status: status,
        })
    }

// обработчик на изменения значения в input всех
    handlerInputChange = ({target: {type, value, name, checked}}) => {
        this.setState({[name]: type === 'checkbox' ? checked : value})
    }

// Фильтрация списка задач по активному фильтру
    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'completed':
                return tasks.filter(tasks => tasks.status)
                break;
            case 'active':
                return tasks.filter(tasks => !tasks.status)
                break;
            default:
                return tasks;
        }
    }

    changeAddTaskMode = () => {
        let {isAddNewTask} = this.state;
        this.setState({
            isAddNewTask: !isAddNewTask,
        })
    }

    addTask = (event) => {
        event.preventDefault();
        this.props.addNewTaskThunkCreator(this.state.usernameInp, this.state.emailInp, this.state.textTaskInp)
    }

    saveEditTask = (id) => {
        this.props.saveEditTaskThunkCreator(id, this.state.textTaskInp, this.state.status, this.props.token, this.props.currentPage)
        this.initializeState()
    }

// обработчик нажатия кнопки "Авто вход"
    onClickLoginBtn = () => {
        this.setState({
            loginInput: 'admin',
            pasInput: '123',
        })
    }

// обработчик нажатия кнопки "Войти"
    onClickFormLoginBtn = (event) => {
        event.preventDefault()
        this.props.loginThunkCreator(this.state.loginInput, this.state.pasInput)
    }

// переключение страниц и получения новых данных с API
    onPageChange = (pageNumber) => {
        this.props.getTasksThunkCreator(pageNumber)
    }

    componentDidMount() {
        this.props.getTasksThunkCreator(this.props.currentPage)
    }

    render() {
        return (
            <Task
                props={this.props}
                state={this.state}
                onClickFormLoginBtn={this.onClickFormLoginBtn}
                onClickLoginBtn={this.onClickLoginBtn}
                addTask={this.addTask}
                saveEditTask={this.saveEditTask}
                filterTasks={this.filterTasks}
                handlerInputChange={this.handlerInputChange}
                handlerEditMode={this.handlerEditMode}
                changeAddTaskMode={this.changeAddTaskMode}
                onPageChange={this.onPageChange}
            />
        )
    }
}

export default connect((store) => ({
    tasks: store.taskReducer.tasks,
    isAddNewTask: store.taskReducer.isAddNewTask,
    currentPage: store.taskReducer.currentPage,
    errorData: store.taskReducer.errorData,
    totalTaskCount: store.taskReducer.totalTaskCount,
    filterReducer: store.filterReducer,
    isAuth: store.authReducer.isAuth,
    login: store.authReducer.login,
    token: store.authReducer.token,
    errorLogin: store.authReducer.errorLogin,
}), {
    changeFilter, getTasksThunkCreator, addNewTaskThunkCreator,
    loginThunkCreator, saveEditTaskThunkCreator
})(TaskContainer);
