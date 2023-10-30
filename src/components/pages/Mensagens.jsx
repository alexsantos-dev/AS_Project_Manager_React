import {useEffect, useState} from "react"
import styles from "../pages/Project.module.css"

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
            mensagens.map((mensagem) =>
            <section className={styles.project_details}>
            <h1>{mensagem.name}</h1>
            <h2>{mensagem.email}</h2>
            <p>{mensagem.msg}</p>
            </section>)
        )    

}

export default Mensagens