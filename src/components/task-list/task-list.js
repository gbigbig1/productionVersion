import React from "react";
import PropTypes from 'prop-types';

import './task-list.css';
 
import FormAddNewTask from './FormAddNewTask';
import TaskItem from "../item-task/task-item";

const TaskList = ({tasks, addTask, errorData, saveEditTask, isAuth, state,
                      changeAddTaskMode, handlerInputChange, handlerEditMode}) => (

    <div  className='tasks__list table'>
        <div className='tr'>
            <div className='th'>{'Пользователь'}</div>
            <div className='th'>{'Email'}</div>
            <div className='th'>{'Текст задачи'}</div>
            <div className='th'>{`Выполенено`}</div>
            {isAuth && <div className='th'>{'Действия'}</div>}
        </div>
        {tasks.map( ({id, username, text, email, status} ) => (
                <TaskItem id={id}
                          username={username}
                          text={text}
                          email={email}
                          status={status}
                          isAuth={isAuth}
                          saveEditTask={saveEditTask}
                          state={state}
                          handlerInputChange={handlerInputChange}
                          handlerEditMode={handlerEditMode}
                />
            )
        )}
        {!state.isAddNewTask //  добавления новой задачи (форма добавления)
            ? <div>
                <button
                    className='tasks__list__newTask primaryBtn'
                    onClick={() => changeAddTaskMode()}
                    title='Добавить новую задачу'>Добавить задачу
                </button>
                <span className='tasks__list__infoLabel'></span>
            </div>
            : <FormAddNewTask state={state} errorData={errorData} addTask={addTask} handlerInputChange={handlerInputChange}/>
        }
    </div>


)

TaskList.propTypes = {
    tasks: PropTypes.array,
    addTask: PropTypes.func,
    addNewTaskInput: PropTypes.func,
    saveEditTask: PropTypes.func,
    handlerInputChange: PropTypes.func,
    handlerEditMode: PropTypes.func,
    isAddNewTask: PropTypes.bool,
    isAuth: PropTypes.bool,
}

TaskList.defaultProps = {
    tasks: [],
    addTask: () => {},
    addNewTaskInput: () => {},
    saveEditTask: () => {},
    handlerInputChange: () => {},
    handlerEditMode: () => {},
    isAddNewTask: false,
    isAuth: false,
}


export default TaskList;
