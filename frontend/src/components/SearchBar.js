import './SearchBar.css';
import React from "react";

function sayHello() {
    alert('YOU WISH IT WORKED!');
}

const SearchBar = () => (
    <div className="wrap">
            <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search for books "/>
                    <button onClick={sayHello} type="submit" class="searchButton">Search </button>
            </div>
    </div>
);

export default SearchBar

