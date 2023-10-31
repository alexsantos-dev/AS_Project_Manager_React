import Container from "../layout/Container"
import MensagemCardExpanded from "../projects/MensagemCardExpanded"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function Mensagem() {
    const { id } = useParams()
    const [mensagem, setMensagem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/mensagens/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setMensagem(data)
            })
            .catch((err) => console.log(err))
    }, [id])

    return (
        <Container>
            <MensagemCardExpanded
                id={mensagem.id}
                name={mensagem.name}
                email={mensagem.email}
                msg={mensagem.msg}
                key={mensagem.id}
            />    
        </Container>
    )
}

export default Mensagem