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
                setMensagens(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, [])

        function deleteMsg(id) {
            fetch(`http://localhost:5000/mensagens/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then((resp) => resp.json())
                .then(() => {
                    setMensagens(mensagens.filter((mensagem) => mensagem.id !== id))
                })
                .catch((err) => console.log(err))
    
        }

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
                            handleRemove={deleteMsg}
                        />)
            }
            {!removeLoading && <Loading />}
        </section>
        )    

}

export default Mensagens