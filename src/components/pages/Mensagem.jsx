import styles from "./Project.module.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"
import Container from "../layout/Container"
import ProjectForm from "../projects/ProjectForm"
import Message from "../layout/Message"
import ServiceForm from "../projects/services/ServiceForm"
import { parse, v4 as uuidv4 } from "uuid"
import ServiceCard from "../projects/services/ServiceCard"

function Mensagem() {
    const { id } = useParams()
    const [mensagem, setMensagem] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/mensagens/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setMensagem(data)
            })
            .catch((err) => console.log(err))

    }, [id])

    return (
        <>
            {mensagem.name ? (
                <div className={styles.project_details}>
                    <Container>
                        <div>
                            {!showMensagemForm && (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Email:</span> {mensagem.email}
                                    </p>
                                    <p>
                                        <span>Resposta:</span> {mensagem.msg}
                                    </p>
                                   </div>
                            )} 
                        </div>
                    </Container >
                </div >
            ) : (
        <Loading />
    )
}
        </>
    )
}

export default Mensagem