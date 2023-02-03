import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

export function ModalPath(props) {
    const [modalshow2, setModalshow2] = React.useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')

    // POST
    function Post(event) {
        axios.post('https://localhost:3000/', {
            username: nome,
            title: email,
            content: numero
        })
            .then(res => {
                console.log(res.data.id)
                window.location.reload(true)
            })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ fontFamily: "Questrial" }}
        >
            <Modal.Body>
                <form onSubmit={Post} className="form">
                    <div className="control">
                        <div className="field">
                            <h2>Adicione um Usuário</h2>
                            <textarea
                                className="input1"
                                type="text"
                                value={nome}
                                placeholder="Nome de usuário..."
                                onChange={event => setNome(event.target.value)}
                            />
                        </div>
                        <div className="field">
                            <textarea
                                className="input1"
                                type="text"
                                value={email}
                                placeholder="Email..."
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="field">
                            <textarea
                                className="input2"
                                type="text"
                                value={numero}
                                placeholder="Telefone..."
                                onChange={event => setNumero(event.target.value)}
                            />
                        </div>
                        <div className="form-btn">
                            <button onClick={() => setModalshow2(false)} disabled={!nome || !email || !numero} type="submit" className="btnSend">CREATE</button>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}