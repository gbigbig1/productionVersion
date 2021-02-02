import React from "react";


const bodyTaskList = () => (
    <div className={ isCompleted ? 'completed text tr' : 'text tr'}>
        <div className='td'>{id}</div>
        <div className='td'>{userName}</div>
        <div className='td'>{email}</div>
        <div className='td'>{text}</div>
        <div className='td' onClick={() => completedTask(id)}>{String(isCompleted) /*<i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />*/}</div>
        <div className='td'>
            <button> edit </button>
            <button onClick={() => removeTask(id)}> del </button>
        </div>
    </div>
)

export default bodyTaskList;
