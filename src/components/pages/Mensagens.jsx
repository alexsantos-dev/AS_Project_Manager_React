import styles from './Projects.module.css'
import Container from '../layout/Container'
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"
import MensagemCard from "../projects/services/MensagemCard"

function Mensagens() {

    const [removeLoading, setRemoveLoading] = useState(false)

    const [mensagens, setMensagens] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/mensagens', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setMensagens(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.project_container}>
            <Container customClass="left">
                {mensagens.length > 0 &&
                    mensagens.map((mensagem) =>

                        <MensagemCard
                            id={mensagem.id}
                            name={mensagem.name}
                            email={mensagem.email}
                            msg={mensagem.msg}
                            key={mensagem.id}
                        />)
                }
                {!removeLoading && <Loading />}
                {removeLoading && mensagens.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}

export default Mensagens