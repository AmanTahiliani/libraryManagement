import React, {useState} from "react";
import '../components/NavBar.css'
import Button from "@material-ui/core/Button";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function NavBar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [uploadData, setUploadData] = useState({
        name: '',
        author: '',
        publisher: '',
        pdf: null
      });
    
    const updateField = e => {
        setUploadData({
            ...uploadData,
            [e.target.name]: e.target.value
        });
    }

    const handleFileSelect = e => {
        setUploadData({
            ...uploadData,
             // eslint-disable-next-line
            ["pdf"]: e.target.files[0]
        });
    }

    const handleUpload = () => {
        console.log(uploadData)

        axios.post("http://localhost:8000/upload/", uploadData,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                //TODO: not sure below if statement is necessary
                if (response.status === 200) {
                    alert('Successfully Uploaded New Book!');
                    setShow(false);
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
                alert('Failed To Upload New Book')
                setShow(false);
            });

    }

    return(
        <div className="NavBar">
            <div className="nav-items">
                <a href="/home">Home</a>
            </div>
            <Button className="buttons" variant="primary" onClick={handleShow}>
                Upload Book
            </Button>

            <Modal show={show} onHide={handleClose}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title >Add Book Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="name"
                                name="name"
                                type="text"
                                value={Form.name}
                                onChange={updateField}
                            />
                            <label htmlFor="floatingInputCustom">Book Title</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="author"
                                name="author"
                                type="text"
                                value={Form.author}
                                onChange={updateField}
                            />
                            <label htmlFor="floatingInputCustom">Author</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="publication"
                                name="publication"
                                type="text"
                                value={Form.publication}
                                onChange={updateField}
                            />
                            <label htmlFor="floatingInputCustom">Publisher</label>
                        </Form.Floating>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{color:"darkblue", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} variant="primary" component="label">
                        Choose a file
                        <input hidden accept="application/pdf" multiple type="file" onChange={handleFileSelect}/>
                    </Button>
                    <Button style={{color:"darkblue", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} variant="primary" onClick={handleUpload}>
                        Save
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NavBar;
