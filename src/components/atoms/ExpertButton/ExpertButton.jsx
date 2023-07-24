import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import supportIcon from '../../../../public/assets/icons/support.png'
import ContactForm from '../../molecules/ContactForm/ContactForm'

import './ExpertButton.scss'

const ExpertButton = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button
        className="expert-button"
        type="button"
        onClick={() => setShow(true)}
      >
        <div className="text">Connect with expert</div>
        <div className="circle" />
        <div className="icon-cont">
          <img src={supportIcon} alt="Support Icon" />
        </div>
      </button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        dialogClassName="modal-cont"
      >
        {/* <Modal.Header closeButton /> */}
        <Modal.Body className="h-100 position-relative p-0  overflow-hidden">
          <ContactForm />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default React.memo(ExpertButton)
