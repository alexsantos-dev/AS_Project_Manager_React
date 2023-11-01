import styles from "./MensagemCard.module.css"
import { BsFillTrashFill } from "react-icons/bs"
import {FaExpand} from 'react-icons/fa6';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

function MensagemCard({ id, name, msg, email, handleRemove}) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <>
            <div className={styles.mensagem_card}>
                <h4>Nome: </h4><p>{name}</p>
                <h4>Email: </h4><p>{email}</p>
                <h4>Mensagem: </h4><p>{msg}</p>
                <div className={styles.mensagem_card_actions}>
                    <Link to={`/mensagens/${id}`}>
                    Expandir<FaExpand /> 
                    </Link>
                    <button onClick={remove}>
                    Excluir<BsFillTrashFill /> 
                    </button>
                </div>
            </div>


        </>
    )
}

export default MensagemCard