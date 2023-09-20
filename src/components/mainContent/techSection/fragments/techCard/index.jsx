export const TechCard = ({name, img}) => {
  return (
    <li>
      <img src={img} alt={`${name} icon`} />
      <p>{name}</p>
    </li>
  )
}