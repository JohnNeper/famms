import React from 'react'
import '../../bootstrap-5.1.3-dist/css/bootstrap.min.css'
import { Modal,ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button
    , FormGroup, FormControl, FormLabel } from 'react-bootstrap'
function Login() {
    return (
        
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
        
    //     <div className="modal fade">
    //         <div className="modal-dialog">
    //         <div className="modal-content">
    //             <div className="modal-header">
    //                 <h5 className="modal-title" id="exampleModalLabel">Add new user</h5>
    //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //             </div>
    //             <div className="modal-body">
    //                 <div className="form-group my-1">
    //                     <label for="completename">Name</label>
    //                     <input type="text" class="form-control" id="completename" placeholder="Name"></input>
    //                 </div>
    //                 <div className="form-group my-3">
    //                     <label for="completelastname">LastName</label>
    //                     <input type="text" className="form-control" id="completelastname" placeholder="LastName"></input>
    //                 </div>
    //                 <div className="form-group my-3">
    //                     <label for="completeage">Date of Birth</label>
    //                     <input type="date" className="form-control" id="completeage" placeholder="jj/mm/aa"></input>
    //                 </div>
    //                 <div className="form-group my-3">
    //                     <label for="completeemail">Email address</label>
    //                     <input type="email" className="form-control" id="completeemail" placeholder="Email"></input>
    //                 </div>
    //                 <div className="form-group my-3">
    //                     <label for="completepassword">Password</label>
    //                     <input type="password" className="form-control" id="completepassword" placeholder="Name"></input>
    //                 </div>

    //             </div>
    //             <div class="modal-footer">
    //                 <button type="submit" class="btn btn-dark" onclick="adduser()">Submit</button>
    //                 <button type="button" class="btn btn-danger" data-bs-dismiss="modal">close</button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    )
}

export default Login
