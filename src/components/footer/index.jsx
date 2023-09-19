import { user } from "../../data/user"

export const Footer = () => {
  return (
    <>
      <div>
        <h2>Contato</h2>
        <div>
          <img src='../../src/assets/whatsapp-icon.png' alt="whatsapp icon" />
          <img src="../../src/assets/linkedin-icon.png" alt="likedin icon" />
          <img src="../../src/assets/github-icon.png" alt="gitHub icon" />
        </div>
      </div>
      <p>Todos os direitos reservados - {user}</p>
    </>
  )
}