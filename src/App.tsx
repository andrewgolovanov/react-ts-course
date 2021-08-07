import React from 'react';
import Card, { CardTheme } from './components/Card/Card';

const App = () => {
  return (
    <div className='App'>
      <Card width='200px' height='200px' theme={CardTheme.outlinded} />
    </div>
  );
};

export default App;
