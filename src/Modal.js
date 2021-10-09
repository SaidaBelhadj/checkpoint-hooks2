import './modal.css';
import { InputGroup,FormControl,Button,Form  } from 'react-bootstrap';

// const Modal = ({ handleClose, show, children }) => {
//   const showHideClassName = {show} ? "modal display-block" : "modal display-none";
{/* <div className={showHideClassName}> */}
{/* <section className="modal-main"> */}
const Modal = ({ show, handleClose, children }) => {
    console.log("show", show);
    console.log("handleClose", handleClose);
    
  const showHideClassName = {show} ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section>
        {children}
        
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};




// <Modal  className={showHideClassName}
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Add Movie</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <InputGroup className="mb-3">
//             <InputGroup.Text 
//             id="inputGroup-sizing-default"
            
//             >Enter Movie title</InputGroup.Text>
//               <FormControl
//                  aria-label="Default"
//                  aria-describedby="inputGroup-sizing-default"
                 
//               />
//             </InputGroup>
//              <br />

//              <InputGroup className="mb-3">
//             <InputGroup.Text id="inputGroup-sizing-default">Enter Movie Rating</InputGroup.Text>
//               <FormControl
//                  aria-label="Default"
//                  aria-describedby="inputGroup-sizing-default"
//               />
//             </InputGroup>
//              <br />

//              <InputGroup className="mb-3">
//              <InputGroup.Text id="inputGroup-sizing-default">Enter Movie PosterURL</InputGroup.Text>
//               <FormControl
//                  aria-label="Default"
//                  aria-describedby="inputGroup-sizing-default"
                 
//               />
//             </InputGroup>
//              <br />
//             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                <Form.Label>Enter Movie Description</Form.Label>
//                <Form.Control as="textarea" rows={3}  />
//              </Form.Group>
//      </Modal.Body>
//      <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" >Save</Button>
//         </Modal.Footer>
//       </Modal>

//}
export default Modal;