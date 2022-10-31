import React, {useState} from "react";
import '../components/NavBar.css'
import Button from "@material-ui/core/Button";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                id="floatingInputCustom"
                                type="title"
                            />
                            <label htmlFor="floatingInputCustom">Book Title</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="author"
                            />
                            <label htmlFor="floatingInputCustom">Author</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="publisher"
                            />
                            <label htmlFor="floatingInputCustom">Publisher</label>
                        </Form.Floating>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{color:"darkblue", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} variant="primary" component="label">
                        Choose a file
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <Button style={{color:"darkblue", margin: "5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} variant="primary" onClick={handleClose}>
                        Save
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NavBar;