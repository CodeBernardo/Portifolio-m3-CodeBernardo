
import { technologies } from './../../../../../data/technologies';

export const TechCard = () => {
  return (
    <>
    {technologies.map((tech) => {
      <li>
        <img src={tech.img} alt={`${tech.name} icon`} />
        <p>{tech.name}</p>
      </li>
    })}
    </>

  )
}

