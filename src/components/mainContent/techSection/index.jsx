import { technologies } from "../../../data/technologies"
import { TechCard } from "./fragments/techCard"

export const TechsSection = () => {
  return (

    <section>
      <h2>Tecnologias</h2>
      <ul>
        {technologies.map(({name, img}, index) => {
          return <TechCard key={index} name={name} img={img} />
        })}
      </ul>
    </section>
    
  )
}