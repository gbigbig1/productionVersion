import React from "react";

import './task-item.css'
import TaskItem from "./task-item";
import {connect} from "react-redux";

//const TaskItem = ({ id, username, text, email, status, removeTask, saveEditTask, addTask, completedTask, state, handlerInputChange, handlerEditMode }) => (





export default connect( (store) => ({
    isAuth: store.authReducer.isAuth
}), {

}  )(TaskItem);
