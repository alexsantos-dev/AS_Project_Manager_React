import {FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa"
import styles from "./Footer.module.css"

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
            <p className={styles.copy_right}><span>Alex Santos</span> &copy; 2023</p>
                <li><a href="https://www.linkedin.com/in/alex-santos-b020b5296"><FaLinkedin/></a></li>
                <li><a href="https://github.com/alexsantos-dev"><FaGithub/></a></li>
                <li><a href="https://wa.me/+5598981630767"><FaWhatsapp/></a></li>
            </ul>
        </footer>
    )
}

export default Footer