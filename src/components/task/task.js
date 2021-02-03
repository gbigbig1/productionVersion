import React, {Component} from "react";

import Login from "../login/login";
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import Pagination from "../pagination/pagination";

import './task.css'

const Task = ({
                  props, state, onClickFormLoginBtn, onClickLoginBtn, addTask, saveEditTask,
                  filterTasks, handlerInputChange, changeAddTaskMode, handlerEditMode, onPageChange
              }) => {

    const {tasks, totalTaskCount, pageSize, filterReducer, changeFilter, isAuth} = props;
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

            <Pagination
                totalTaskCount={totalTaskCount}
                pageSize={pageSize}
                currentPage={props.currentPage}
                onPageChange={onPageChange}
            />
            <Footer
                amount={totalTaskCount}
                activeFilter={filterReducer}
                changeFilter={changeFilter}
            />
        </div>
    )

}

export default Task;
