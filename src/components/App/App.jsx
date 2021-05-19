import React, { useState } from 'react';
import Menu from '../Menu/Menu.jsx';
import Timer from '../Timer/Timer.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import Header from '../Header/Header.jsx';
import '../../styles/App.css';

const App = () => {
  const [menuOption, setMenuOption] = useState('Session');

  const choseMenuOption = (option) => {
    setMenuOption(option);
  };

  return (
    <div className="app">
      <div className="main-block">
        <Header />
        <Menu choseMenuOption={choseMenuOption} />
        <Timer menuOption={menuOption} />
      </div>
      <div className="todolist-wrapper">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
