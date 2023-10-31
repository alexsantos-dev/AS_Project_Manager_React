import MensagemForm from '../projects/MensagemForm';
import styles from './NewProject.module.css'


function Contact() {

    function createPost(mensagem) {

        fetch('http://localhost:5000/mensagens', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mensagem),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    

    return (
        <section className={styles.new_project_conteiner}>
            <h1>Entre em contato</h1>
            <p>mande uma mensagem para obter suporte</p>
            <MensagemForm handleSubmit={createPost} btnText="Enviar"/>
        </section>
    )
}

export default Contact