import React from "react";

import './item-task.css'
import ItemTask from "./item-task";
import {connect} from "react-redux";

//const ItemTask = ({ id, username, text, email, status, removeTask, saveEditTask, addTask, completedTask, state, handlerInputChange, handlerEditMode }) => (





export default connect( (store) => ({
    isAuth: store.authReducer.isAuth
}), {

}  )(ItemTask);
