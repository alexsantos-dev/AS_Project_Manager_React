import {useState, useEffect} from "react"
import styles from "./Notifications.module.css"
function Notifications(){
    const [mensagens, setMensagens] = useState([])

    useEffect(()=>{
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
        })


    let notifications 
    {mensagens.length > 0 && (notifications = mensagens.length) 
    }


    return(
       <>
        {notifications === 0 && {}}
        {notifications > 0 && (<div className={styles.not_icon}>{notifications}</div>)}
       </>
    )
}

export default Notifications