import {useState, useEffect} from 'react';
import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import { deleteAccount } from '../API services (fetch functions)/userServices';
import { CheckTokenExpiration } from '../API services (fetch functions)/TokenServices';




export default function Settings() {

    const [show, setShow] = React.useState(true)

    const reload = () => window.location.reload()
    const handleShow = () => setShow(true)
    const handleClose = () => {setShow(false)
        reload();}



    useEffect(() => {
        CheckTokenExpiration();
    },[]);

    const [warning, setWarning] = useState(false);

    const showWarning = function() {
        return(
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Account will be permanently deleted</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button  variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="danger" onClick={()=> handleDelete(true)}>Permanently Delete Account</Button>

                    </Modal.Footer>
                </Modal>
            </>

        )
    }

    const handleDelete = function() {
        deleteAccount()
    }

    return (
        <div
        className='modal show'
        style={{display: 'block', position: 'initial'}}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Account</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to delete account?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={() =>setWarning(true)}>Delete Account</Button>
                    {warning ? showWarning():<div></div>}

                </Modal.Footer>
            </Modal.Dialog>





        </div>
    )



}
