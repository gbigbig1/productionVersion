import React from "react";

const FormAddNewTask = ({ state, errorData, addTask, handlerInputChange }) => (
    <form className='tr' onSubmit={addTask}>
        <div className='td'>
            <input
                className={errorData.username
                    ? 'tasks__list__input tasks__list__username error '
                    : 'tasks__list__input tasks__list__username'}
                name='usernameInp'
                placeholder='Имя пользователя'
                onChange={handlerInputChange}
                value={state.usernameInp}
            />{errorData.username && <label className='textError'>{errorData.username}</label>}
        </div>
        <div className='td'>
            <input
                className={errorData.email
                    ? 'tasks__list__input tasks__list__email error '
                    : 'tasks__list__input tasks__list__email'}
                name='emailInp'
                placeholder='Почта'
                onChange={handlerInputChange}
                value={state.emailInp}
            />{errorData.email && <label className='textError'>{errorData.email}</label>}
        </div>
        <div className='td'>
            <input
                className={errorData.text
                    ? 'tasks__list__input tasks__list__textTask error'
                    : 'tasks__list__input tasks__list__textTask'}
                name='textTaskInp'
                placeholder='Текст новой задачи'
                onChange={handlerInputChange}
                value={state.textTaskInp}
            />{errorData.text && <label className='textError'>{errorData.text}</label>}
        </div>
        <div className='td'></div>
        <div className='td'>
            <button className='primaryBtn' type='submit' title='Добавить новую задачу'>Добавить</button>
        </div>
    </form>
);

export default FormAddNewTask;





