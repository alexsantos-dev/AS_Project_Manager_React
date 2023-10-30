import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./Navbar.module.css"
import logo from "../../assets/costs_logo.png"
import {useState, useEffect} from "react"


function Navbar() {

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


    let notifications  
    {mensagens.length > 0 && (notifications = mensagens.length) 
    }



    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="logo do projeto" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/" lassName={styles.item}>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li className={styles.item}>
                         <Link to="/mensagens">Mensagens {notifications && (
                         <span className={styles.not_icon}>{notifications}</span>)}</Link>
                    </li>                   
   
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar