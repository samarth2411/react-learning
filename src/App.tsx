import React from 'react';
import './App.css';
import ClassComponentDemo from './class-component';
import { FunctionalComponent as Samarth } from './functional-component';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <ClassComponentDemo/>
      </div>
      <div>
        <Samarth/>   {/* changing the name of Functional Component to Samarth  */}
      </div>
    </div>

  );
}

export default App;
