import { Link } from "react-router-dom"
import styles from "./MensagemCardExpanded.module.css"
import {FaArrowLeft} from "react-icons/fa6"

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
                <div  className={styles.mensagem_card_actions}>
                    <Link to="/mensagens">
                        <FaArrowLeft/>
                        Voltar
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MensagemCard