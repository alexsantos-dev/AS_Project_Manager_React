import styles from './Home.module.css'
import savings from '../../assets/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_conteiner}>
            <h1>Bem-vindo ao <span>Projetinx</span></h1>
            <p>Começe a gerenciar seus projetos agora mesmo</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savings} alt="savings svg" />
        </section>
    )
}

export default Home