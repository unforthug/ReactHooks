
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from '@mui/material';

function Adding({Adding}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newMovie,setNewMovie] = useState({
      title : '',
      posterUrl :'',
      description : '',
      rating : 0
    })

    const handlechange =(e)=>{
      setNewMovie({...newMovie, [e.target.name] : e.target.value}); 
    }
    const AddingMovie=()=>{
      Adding(newMovie);
      handleClose();
    }

    return (
      <div>
         <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Movie Title"
                onChange={handlechange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie PosterUrl</Form.Label>
              <Form.Control
                type="text"
                name="posterUrl"
                placeholder="Enter PosterUrl"
                onChange={handlechange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter Movie Description"
                onChange={handlechange}
                autoFocus
              />
            </Form.Group>
            <Rating
              name="rating"
            onChange={(event, newValue) => {
            setNewMovie({...newMovie,rating : newValue});
             }}
            max={10}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddingMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
  
  export default Adding;