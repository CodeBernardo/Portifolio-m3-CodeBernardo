export const ProjectCard = (({name, description}) => {
  return (
    <li>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href="#">Saiba mais</a>
      <img src="../../../../src/assets/git-icon.png" alt="git icon" />
    </li>
  )
  })