import React from 'react';
import './App.css';
import Header from './Header';
import BowlerList from './Bowling/BowlerList';

//callign the header and bowler lsit components
function App() {
  return (
    <div className="App">
      <Header title="This is a page made by your pal, Big Al. Here you can view all the personal information of the fine folks on the Sharks and Marlins Bowling Team." />
      <BowlerList />
    </div>
  );
}

export default App;
