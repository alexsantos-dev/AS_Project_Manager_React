import { useState } from "react"

import SubmitButton from "../form/SubmitButton"
import Input from "../form/Input"
import styles from "./ProjectForm.module.css"

function MensagemForm({ handleSubmit, btnText, projectData }) {

    const [mensagem, setMensagem] = useState(projectData || {})


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(mensagem)
    }

    function handleChange(e) {
        setMensagem({ ...mensagem, [e.target.name]: e.target.value })
    }


    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome:"
                name="name"
                placeholder="Insira o seu nome..."
                handleOnChange={handleChange}
                value={mensagem.name ? mensagem.name : ''}
            />
            <Input type="email"
                text="Email:"
                name="email"
                placeholder="Insira seu email..."
                handleOnChange={handleChange}
                value={mensagem.email ? mensagem.email : ''}
            />
            <Input type="text"
                text="Mensagem:"
                name="msg"
                placeholder="Insira sua mensagem..."
                handleOnChange={handleChange}
                value={mensagem.msg ? mensagem.msg : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default MensagemForm