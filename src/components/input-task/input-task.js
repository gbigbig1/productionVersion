import React from "react";
import PropTypes from 'prop-types';

import './input-task.css'

const InputTask = ({onChange, value, onKeyPress}) => (
    <div className='tasks__new-task'>
        <span className='tasks__new-task__icon'>+</span>
        <input
            className='tasks__new-task__input'
            name='textTask'
            placeholder = 'Enter new taskReducer'
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
        />
    </div>


)


InputTask.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
}

InputTask.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: '',
}


export default InputTask;
