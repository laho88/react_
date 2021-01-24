import './App.css';
import {useState} from 'react';
import {Router} from '@reach/router';
import Home from "./components/home";
import Four from "./components/four";
import Hello from "./components/hello";
import Colors from "./components/colors";

function App() {
  return (
    <div className="App">
      <Router>
          <Home path="/home"/>
          <Hello path="/:string"/>
          <Four path="/:int"/>
          <Colors path="/:string/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;

