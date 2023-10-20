import ProjectForm from '../projects/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate } from 'react-router-dom'


function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projects')
            })
            .catch((err) => console.log(err))
    }

    return (
        <section className={styles.new_project_conteiner}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para adicioná-lo aos serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </section>
    )
}

export default NewProject