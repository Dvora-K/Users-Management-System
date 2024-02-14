import React, { FC } from 'react';
import './My-Modal.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


interface MyModalProps {
  onConfirm: () => void
  onCancel: () => void
  title: string
  children: React.ReactNode
}

const MyModal: FC<MyModalProps> = (props: MyModalProps) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return <div className="My-Modal">
    <>
      <Modal
        show={show}
        onHide={props.onCancel}
        onShow={handleShow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onCancel}>Cancel</Button>
          <Button onClick={props.onConfirm} variant="primary">Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  </div>
}

export default MyModal;
