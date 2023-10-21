import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../projects/ProjectCard"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"

function Projects() {
    const [projectMessage, setProjectMessage] = useState('')

    const [removeLoading, setRemoveLoading] = useState(false)

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((resp) => resp.json())
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id))
                setProjectMessage('Projeto removido com sucesso!')
            })
            .catch((err) => console.log(err))

    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_cotainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="sucess" msg={message} />}
            {projectMessage && <Message type="sucess" msg={projectMessage} />}
            <Container customClass="left">
                {projects.length > 0 &&
                    projects.map((project) =>

                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />)
                }
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}

export default Projects