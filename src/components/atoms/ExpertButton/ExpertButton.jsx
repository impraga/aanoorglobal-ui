import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import './ExpertButton.scss'
import supportIcon from '../../../../public/assets/icons/support.png'
import ContactForm from '../../molecules/ContactForm/ContactForm'


const ExpertButton = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return <>
    <button className='expert-button' type='button' onClick={handleShow}>
      <div className='text'>Connect with expert</div>
      <div className='circle' />
      <div className='icon-cont'>
        <img src={supportIcon} alt="Support Icon" />
      </div>
    </button>
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="modal-cont"
    >
      {/* <Modal.Header closeButton /> */}
      <Modal.Body className='h-100 position-relative'>
        <ContactForm />
      </Modal.Body>
    </Modal>
  </>
}

export default ExpertButton
