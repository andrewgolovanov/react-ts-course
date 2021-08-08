import React from 'react';
import Card, { CardTheme } from './components/Card/Card';
import Events from './components/Events/Events';
import TodoList from './components/TodoList/TodoList';
import UserList from './components/UserList/UserList';

const App = () => {
  return (
    <div className='App'>
      <Events />
      <Card width='200px' height='200px' theme={CardTheme.outlinded} />
      <UserList />
      <TodoList />
    </div>
  );
};

export default App;
