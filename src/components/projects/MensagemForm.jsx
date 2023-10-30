import { useEffect, useState, useNavigate } from "react"

import SubmitButton from "../form/SubmitButton"
import Input from "../form/Input"
import styles from "./ProjectForm.module.css"

function MensagemForm({ handleSubmit, btnText, mensagemData }) {


    const [mensagem, setMensagem] = useState(mensagemData || {})

    useEffect(() => {
        fetch('http://localhost:5000/mensagens', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mensagem),
        })
            .then((resp) => resp.json())
            .then((data) => {
                  setMensagem(data)
            })
            .catch((err) => console.log(err))

        })
        
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
                placeholder="Insira seu nome..."
                handleOnChange={handleChange}
                value={mensagem.name ? mensagem.name : ''}
            />
            <Input 
                type="email"
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