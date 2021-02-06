import React from "react";

import Login from "../login/login";
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import PaginationContainer from "../pagination/pagination-container";

import './task.css'

const Task = ({
                  props, state, onClickFormLoginBtn, onClickLoginBtn, addTask, saveEditTask,
                  filterTasks, handlerInputChange, changeAddTaskMode, handlerEditMode, onPageChange
              }) =>
    {
    const {tasks, filterReducer, isAuth} = props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = filterTasks(tasks, filterReducer);
    return (
        <div className='tasks__content'>
            <Login
                isAuth={isAuth}
                login={props.login}
                onClickFormLoginBtn={onClickFormLoginBtn}
                onClickLoginBtn={onClickLoginBtn}
                loginInput={state.loginInput}
                pasInput={state.pasInput}
                handlerInputChange={handlerInputChange}
                errorLogin={props.errorLogin}
            />
            {isTasksExist && <TaskList
                tasks={filteredTasks}
                addTask={addTask}
                saveEditTask={saveEditTask}
                isAuth={isAuth}
                state={state}
                changeAddTaskMode={changeAddTaskMode}
                handlerInputChange={handlerInputChange}
                handlerEditMode={handlerEditMode}
                errorData={props.errorData}
            />}

            <PaginationContainer
                currentPage={props.currentPage}
                onPageChange={onPageChange}
            />
            <Footer
                totalTaskCount={props.totalTaskCount}
                activeFilter={filterReducer}
                changeFilter={props.changeFilter}
            />
        </div>
    )
}

export default Task;
