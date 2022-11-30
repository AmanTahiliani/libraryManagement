import './SearchBar.css';
import React, {useState} from "react";
import axios from 'axios';

function SearchBar() {
    const [inputText, setInputText] = useState("")

    const updateField = e => {
        setInputText(e.target.value);
    }

    const handleSearch = e => {
        console.log(inputText);
        axios.get("http://localhost:8000/search/title/?name=" + inputText)
            .then(response => {
                //TODO: not sure below if statement is necessary
                if (response.status === 200) {
                    alert("Successfully Retrieved Book From Database");
                    //TODO: display PDF somehow
                }
            })
            .catch(e => {
                if (e.response) {
                    // The request was made and the server responded with a status code outside range of 2xx
                    console.log(e.response);
                  } else if (e.request) {
                    // The request was made but no response was received
                    console.log(e.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', e.message);
                  }
                  console.log(e.config);
                  alert('Failed To Retrieve Book')
            });
    }

    return (
    <div className="wrap">
            <div className="search">
                    <input type="text" onChange={updateField} className="searchTerm" placeholder="Search for books "/>
                    <button onClick={handleSearch} type="submit" class="searchButton">Search </button>
            </div>
    </div>
    )
}

export default SearchBar;

