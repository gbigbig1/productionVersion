import React, { Fragment } from 'react';


import './App.css';

import Title from './components/title/title'
import Task from "./containers/task/task";

const App = () => (
  <Fragment>
      <div className='tasks'>
          <Title title='Список задач'/>
          <Task />
      </div>
  </Fragment>
);

export default App;
