import {useEffect, useState} from "react"
import styles from "./Mensagens.module.css"
import MensagemCard from "../projects/MensagemCard"
import Loading from "../layout/Loading"

function Mensagens(){
    const [mensagens, setMensagens] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    
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
                setRemoveLoading(true)
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
            {!removeLoading && <Loading />}
                {removeLoading && mensagens.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
        </section>
        )    

}

export default Mensagens