import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

function Delete(event) {
    axios.delete('https://localhost:3000/' + event + '/', {
      id: event
    })
      .then(res => {
        console.log(res)
        window.location.reload(true)
      })
  }

export function ModalDelete(props) {
    const [deleteid, setDeletid] = useState()
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ fontFamily: "Questrial" }}
        >
            <Modal.Body>
                <p>
                    Você tem certeza que deseja deletar este item?
                </p>
                <Button onClick={() => {
                    Delete(deleteid)
                    setModalshow(false)
                }}>SIM</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}