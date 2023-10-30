import styles from "../ProjectCard.module.css"

function MensagemCard({ id, name, email, msg}) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
            <div className={styles.project_card}>
                <h4>{name}</h4>
                <br />
                <h4>{email}</h4>
                <p>
                    <span>Mensagem:</span> R${msg}
                </p>
            </div>
    )
}

export default MensagemCard