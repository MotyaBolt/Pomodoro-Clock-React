import React, { useState } from 'react';
import '../../styles/Menu.css';

const Menu = (props) => {
  const [selectedOption, setSelectedOption] = useState('Session');
  const selectOption = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="menu">
      <button
        className={
          selectedOption === 'Session' ? 'menu-btn-selected' : 'menu-btn'
        }
        value="Session"
        onClick={(e) => {
          selectOption(e.target.value);
          props.choseMenuOption('Session');
        }}
      >
        Session
      </button>
      <button
        className={
          selectedOption === 'Break' ? 'menu-btn-selected' : 'menu-btn'
        }
        value="Break"
        onClick={(e) => {
          selectOption(e.target.value);
          props.choseMenuOption('Break');
        }}
      >
        Break
      </button>
      <button
        className={selectedOption === 'Loop' ? 'menu-btn-selected' : 'menu-btn'}
        value="Loop"
        onClick={(e) => {
          selectOption(e.target.value);
          props.choseMenuOption('Loop');
        }}
      >
        Loop
      </button>
    </div>
  );
};

export default Menu;
