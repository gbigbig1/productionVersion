import React from "react";
import PropTypes from 'prop-types';

import './title.css';

const Title = ({title}) => (
    <h1 className='tasks__title'>{title}</h1>
)

Title.propTypes = {
    title: PropTypes.string,
}

Title.defaultProp = {
    title: 'List Task',
}

export default Title;