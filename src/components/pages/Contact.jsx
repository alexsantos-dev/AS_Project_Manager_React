import styles from '../pages/NewProject.module.css'
import MensagemForm from "../projects/MensagemForm"

function Contact(){
    return(
        <section className={styles.new_project_conteiner}>
        <h1>Contato</h1>
        <p>inscreva-se para obter nossos serviços</p>
        <MensagemForm btnText="Enviar" />
    </section>
    )
}

export default Contact