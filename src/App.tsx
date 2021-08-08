import React from 'react';
import Card, { CardTheme } from './components/Card/Card';
import Events from './components/Events/Events';
import TodoList from './components/TodoList/TodoList';
import UserList from './components/UserList/UserList';
import UserPage from './components/pages/User/User';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      {/* Menu */}
      <div>
        <NavLink to='/events'>Events</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/todo-list'>Todos</NavLink>
      </div>
      {/* Events */}
      <Route path={['/events', '/']} exact>
        <>
          <Events />
          <Card width='200px' height='200px' theme={CardTheme.outlinded} />
        </>
      </Route>
      {/* Users */}
      <Route path='/users' component={UserList} exact />
      <Route path='/users/:id' component={UserPage} />
      {/* Todos */}
      <Route path='/todo-list' component={TodoList} exact />
    </BrowserRouter>
  );
};

export default App;
