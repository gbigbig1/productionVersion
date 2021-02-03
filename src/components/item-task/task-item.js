import React from "react";
import PropTypes from 'prop-types';

import iconEdit from '../../assets/images/edit_icon.png'
import iconSave from '../../assets/images/save_icon.png'

import './task-item.css'


const TaskItem = ({ id, username, text, email, status, isAuth, saveEditTask, state, handlerInputChange, handlerEditMode }) => (

    <div className={ status ? 'completed text tr' : 'text tr'}>
        {/*<div className='td'>{id}</div>*/}
        <div className='td'>{username}</div>
        <div className='td'>{email}</div>
        { (state.isEditMode && id === state.idEditTask)
            ? <div className='td'>
                    <input
                        className='tasks__list__input tasks__list__textTask'
                        name='textTaskInp'
                        placeholder='Текст новой задачи'
                        onChange={handlerInputChange}
                        value={state.textTaskInp}
                    />
                </div>
            : <div className='td'>{text}</div>
        }
        { (state.isEditMode && id === state.idEditTask )
            ? <div className='td'>
                <input
                    type='checkbox'
                    name='status'
                    title='Выполнено?'
                    onChange={handlerInputChange}
                    checked={state.status}
                />
            </div>
            : <div className='td'>
                <input
                    type='checkbox'
                    name='status'
                    title='Выполнено?'
                    onChange={handlerInputChange}
                    checked={status}
                    disabled
                />
            </div>
        }
        {   isAuth ?
            (state.isEditMode && id === state.idEditTask)
                ? <div className='td'>
                    <img className='save-icon' src={iconSave} onClick={() => saveEditTask(id)}></img>
                    </div>
                : <div className='td'>
                    <img className='edit-icon' src={iconEdit} onClick={() => handlerEditMode(id, username, email, text, status)}></img>

                    </div>
            :  <span></span>
        }
    </div>
);

TaskItem.propTypes = {
    id: PropTypes.number,
    username: PropTypes.string,
    email: PropTypes.string,
    text: PropTypes.string,
    status: PropTypes.bool,
    isAuth: PropTypes.bool,
    saveEditTask: PropTypes.func,
    handlerInputChange: PropTypes.func,
    handlerEditMode: PropTypes.func,

}

TaskItem.defaultProps = {
    id: '',
    username: '',
    email: '',
    text: '',
    status: false,
    isAuth: false,
    saveEditTask: () => {},
    handlerInputChange: () => {},
    handlerEditMode: () => {},
}

export default TaskItem;
