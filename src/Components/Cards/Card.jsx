import React, { useState, useEffect } from 'react'
import { ModalDelete } from '../DeletMethod/Delete'
import "bootstrap/dist/css/bootstrap.min.css"
import '../Cards/CardStyle.css'

export function Card({ conteudo, id, username }) {
    const [modalshow, setModalshow] = React.useState(false)
   

    return (
        <article>
            <div className="col-10 mx-auto">
                <div className="d-flex col-8 mx-auto justify-content-around userdata">
                    <h4>Nome: {conteudo}</h4>
                    <h4>Email: {id}</h4>
                    <h4>Número: {username}</h4>
                    <button
                        onClick={() => {
                            setModalshow(true)
                        }}>Excluir
                    </button>
                    <ModalDelete show={modalshow} onHide={() => setModalshow(false)} />
                    <button>Editar</button>
                </div>
            </div>
            <div>
            </div>
        </article>
    )
}