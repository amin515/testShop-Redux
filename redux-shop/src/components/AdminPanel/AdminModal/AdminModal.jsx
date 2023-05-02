import React from 'react'
import './AdminModal.scss';
import { Modal } from 'react-bootstrap';



const AdminModal = ({children, show, onHide, title}) => {
  return (
    <>
    <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
    </Modal>
    </>
  )
}

export default AdminModal;