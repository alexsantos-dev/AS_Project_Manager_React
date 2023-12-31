import styles from "./Project.module.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"
import Container from "../layout/Container"
import ProjectForm from "../projects/ProjectForm"
import Message from "../layout/Message"
import ServiceForm from "../projects/services/ServiceForm"
import { parse, v4 as uuidv4 } from "uuid"
import ServiceCard from "../projects/services/ServiceCard"

function Project() {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setServices(data.services)
            })
            .catch((err) => console.log(err))

    }, [id])

    function editPost(project) {
        if (project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto atuaizado com sucesso!')
                setType('sucess')
            })
            .catch((err) => console.log(err))
    }

    function createService(project) {
        setMessage('Projeto atuaizado com sucesso!')
        setType('sucess')

        const lastService = project.services[project.services.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapasssado, verifique o valor do serviço!')
            setType('error')
            project.services.pop()
            return false
        }

        project.cost = newCost

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(resp => resp.json())
            .then(data => {

            })
            .catch(err => console.log(err))
    }

    function removeServices(id, cost) {

        const servicesUpadate = project.services.filter((service) => {
            service.id !== id
        })

        const projectUpdated = project

        projectUpdated.services = servicesUpadate

        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        })
            .then(resp => resp.json())
            .then(data => {
                setProject(projectUpdated)
                setServices(servicesUpadate)
                setMessage('Serviço removido com sucesso!')
                setType('sucess')
            })
            .catch(err => console.log(err))

    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    {message && <Message type={type} msg={message} />}
                    <div className={styles.details_container}>
                        <h1>Projeto: <span>{project.name}</span></h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>{
                            !showProjectForm ? 'Editar Projeto' : 'Fechar'
                        }
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria:</span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total de orçamento:</span> {project.budget}
                                </p>
                                <p>
                                    <span>Total utilizado:</span> {project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <ProjectForm
                                    handleSubmit={editPost}
                                    btnText="Concluir edição"
                                    projectData={project} />
                            </div>
                        )}
                    </div>
                    <div className={styles.services_form_container}>
                        <h2>Adcione um serviço:</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>{
                            !showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm && (
                                <ServiceForm
                                    handleSubmit={createService}
                                    btnText="Adicionar serviço"
                                    projectData={project}
                                />
                            )}
                        </div>
                    </div>
                    <h2>Serviços</h2>
                    <Container customClass="start">
                        {services.length > 0 && services.map((service) =>
                            <ServiceCard
                                id={service.id}
                                name={service.name}
                                cost={service.cost}
                                description={service.description}
                                key={service.id}
                                handleRemove={removeServices}
                            />
                        )
                        }
                        {services.length === 0 && <p>Não há projetos cadastrados</p>}
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project