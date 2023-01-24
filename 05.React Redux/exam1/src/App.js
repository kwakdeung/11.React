import React from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

function App() {    
  
  return (
    <div className="App">
      <h2>Root 컴포넌트</h2>
      <AddNumberRoot></AddNumberRoot>  
      <DisplayNumberRoot></DisplayNumberRoot>  
    </div>
  );
};


export default App;
