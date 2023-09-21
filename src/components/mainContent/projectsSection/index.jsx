import { projects } from "../../../data/projects"
import { ProjectCard } from "./fragments"
import styles from "./index.module.css"

export const ProjectsSection = () => {
  return (
    <>
      <section className={styles.projects__section} id='projects'>
        <h2 className="title-2">Projetos</h2>
        <ul>
          {projects.map(({name, description}, index) => {
            return <ProjectCard key={index} name={name} description={description}/>
          })}
        </ul>
      </section>
    </>
  )
}