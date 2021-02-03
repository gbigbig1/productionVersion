import React, { Fragment } from 'react';


import './App.css';

import Title from './components/title/title'
import TaskContainer from "./components/task/task-container";

const App = () => (
  <Fragment>
      <div className='tasks'>
          <Title title='Список задач'/>
          <TaskContainer />
      </div>
  </Fragment>
);

export default App;
