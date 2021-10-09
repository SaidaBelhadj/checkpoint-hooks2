import React, {useState} from 'react';
import { InputGroup , FormControl, Button, Modal, Form} from 'react-bootstrap'


function AddMovie({movies, setMovies}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newTitle,setNewTitle] = useState('');
  const [newIMDBRating,setNewIMDBRating]= useState('');
  const [newPoster,setNewPoster] =useState('');
  const [newDescription,setNewDescription]=useState('');

  const NewMovie = () => {
    let newMovie = {
      IMDBRating :newIMDBRating ,
      Title : newTitle,
      Poster: newPoster,
      Description: newDescription
    };

    setMovies([...movies,newMovie])
    handleClose()
   

  }

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow} style={{marginLeft:"40%", width:'300px'}}>
        Add New Movie 
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text 
            id="inputGroup-sizing-default"
            
            >Enter Movie title</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setNewTitle(e.target.value)}
                 
              />
            </InputGroup>
             <br />

             <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Enter Movie Rating</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) =>   setNewIMDBRating(e.target.value)}

                 
              />
            </InputGroup>
             <br />

             <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">Enter Movie PosterURL</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setNewPoster(e.target.value)}
                 
              />
            </InputGroup>
             <br />

             


             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Enter Movie Description</Form.Label>
               <Form.Control as="textarea" rows={3} onChange ={(e) => setNewDescription(e.target.value)} />
             </Form.Group>


             
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={NewMovie}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


   

export default AddMovie;