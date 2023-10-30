import {useEffect, useState} from "react"
import styles from "./Mensagens.module.css"
import Container from "../layout/Container"
import MensagemCard from "../projects/MensagemCard"

function Mensagens(){
    const [mensagens, setMensagens] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/mensagens',{
            method: "GET",
            headers:{
                "Content-type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setMensagens(data)
            })
            .catch((err) => console.log(err))
        },[])

    return(                  
        <section className={styles.mensagem_section}>
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
        </section>
        )    

}

export default Mensagens