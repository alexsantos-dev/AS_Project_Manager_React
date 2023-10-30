import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./Navbar.module.css"
import logo from "../../assets/costs_logo.png"

function Navbar() {
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
                        <Link to="/mensagens">Mensagens</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar