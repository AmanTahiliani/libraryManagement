import './SearchBar.css';
import React, {useState} from "react";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

function SearchBar() {
    const [inputText, setInputText] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [url, setUrl] = useState("")
    const [bookName, setBookName] = useState("")
    const [checked, setChecked] = useState(false)
    const handleCheckedChange = () => setChecked(!checked)

    const updateField = e => {
        setInputText(e.target.value);
    }

    const handleSearch = e => {
        console.log(inputText);
        if (!checked) {
            axios.get("http://localhost:8000/search/title/?name=" + inputText)
            .then(response => {
                if (response.status === 200 && response.data && response.data.length) {
                    console.log(response.data[0])
                    setUrl("http://localhost:8000" + response.data[0].pdf);
                    setBookName(response.data[0].name)
                    setShow(true);
                } else {
                    alert("Cannot find this book")
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
        } else {
            axios.get("http://localhost:8000/search/keywords/?keyword=" + inputText)
            .then(response => {
                console.log(response.data)
                if (response.status === 200 && response.data && response.data.length) {
                    setUrl("http://localhost:8000" + response.data);
                    console.log("url: " + url)
                    setBookName("Open Your Book Here")
                    setShow(true);
                } else {
                    console.log(response)
                    alert("Cannot find this book")
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
    }

    return (
    <div className="wrap">
            <div className="search">
                    <input type="text" onChange={updateField} className="searchTerm" placeholder="Search for books "/>
                    <button onClick={handleSearch} type="submit" class="searchButton">Search </button>
            </div>
            <label>
                <input
                type="checkbox"
                className="checkbox"
                checked={checked}
                onChange={handleCheckedChange}
                />
                <body className="checkboxText"> Search By Keyword </body>
            </label>


            <Modal show={show} onHide={handleClose} className="pdfModal">
            <Modal.Header closeButton>
              <Modal.Title> 
                Success
                <h6>Your book was retrieved from the database </h6>
                </Modal.Title>
            </Modal.Header>
      
            <Modal.Body>
              <a href={url} target="_blank">{<h6 className="pdfLink">{bookName}</h6>}</a>
            </Modal.Body>
      
          </Modal>
    </div>
    )
}

export default SearchBar;

