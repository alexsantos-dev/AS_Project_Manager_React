import styles from "./MensagemCard.module.css"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom"

function MensagemCard({ id, name, msg, email, handleRemove }) {
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
            </div>


        </>
    )
}

export default MensagemCard