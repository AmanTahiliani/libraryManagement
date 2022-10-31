import './App.css';
import Title from './components/Title';
import NavBar from "./components/NavBar";
import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
      <div className="App">
          <NavBar/>
          <Title/>
          <SearchBar/>         
      </div>
  );
}

export default App;
