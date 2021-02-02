import React, {Component} from "react";
import {connect} from 'react-redux';

import Login from "../../components/login/login";
import TaskList from '../../components/task-list/task-list';
import Footer from '../../components/footer/footer';
import Pagination from "../../components/pagination/pagination";

import {
    changeFilter,
    getTasksThunkCreator,
    addNewTaskThunkCreator,
    loginThunkCreator,
    saveEditTaskThunkCreator
} from "../../actions/actionCreator";

import './task.css'

class Task extends Component {

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
        debugger
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
        debugger
        this.setState({[name]: type === 'checkbox' ? checked : value})
    }

// фильтуер задачи по активному фильтру
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
        let lastPageNumber = (Math.floor(this.props.totalTaskCount / this.props.pageSize))+1
        this.props.addNewTaskThunkCreator(this.state.usernameInp, this.state.emailInp, this.state.textTaskInp, lastPageNumber)
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
        debugger
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
        const { tasks, totalTaskCount, pageSize, filterReducer, changeFilter, isAuth} = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, filterReducer);

        return (
            <div className='tasks__content'>
                <Login
                    isAuth={isAuth}
                    login={this.props.login}
                    onClickFormLoginBtn={this.onClickFormLoginBtn}
                    onClickLoginBtn={this.onClickLoginBtn}
                    loginInput={this.state.loginInput}
                    pasInput={this.state.pasInput}
                    handlerInputChange={this.handlerInputChange}
                    errorLogin={this.props.errorLogin}
                />
                {isTasksExist && <TaskList
                    tasks={filteredTasks}
                    addTask={this.addTask}
                    saveEditTask={this.saveEditTask}
                    isAuth={isAuth}
                    state={this.state}
                    changeAddTaskMode={this.changeAddTaskMode}
                    handlerInputChange={this.handlerInputChange}
                    handlerEditMode={this.handlerEditMode}
                    errorData={this.props.errorData}
                />}

                <Pagination
                    totalTaskCount={totalTaskCount}
                    pageSize={pageSize}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                />
                <Footer
                    amount={totalTaskCount}
                    activeFilter={filterReducer}
                    changeFilter={changeFilter}
                />
            </div>
        );
    }
}

export default connect((store) => ({
    tasks: store.taskReducer.tasks,
    isAddNewTask: store.taskReducer.isAddNewTask,
    currentPage: store.taskReducer.currentPage,
    pageSize: store.taskReducer.pageSize,
    totalTaskCount: store.taskReducer.totalTaskCount,
    errorData: store.taskReducer.errorData,
    filterReducer: store.filterReducer,
    isAuth: store.authReducer.isAuth,
    login: store.authReducer.login,
    token: store.authReducer.token,
    errorLogin: store.authReducer.errorLogin,
}), {
    changeFilter, getTasksThunkCreator, addNewTaskThunkCreator,
    loginThunkCreator, saveEditTaskThunkCreator
})(Task);
