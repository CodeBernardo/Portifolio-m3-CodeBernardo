import { user } from "../../data/user"
import image1 from "../../assets/whatsapp-icon.png";
import image2 from "../../assets/linkedin-icon.png";
import image3 from "../../assets/github-icon.png";

export const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h2>Contato</h2>
          <div>
            <img src={image1} alt="whatsapp icon" />
            <img src={image2} alt="likedin icon" />
            <img src={image3} alt="gitHub icon" />
          </div>
        </div>
        <p>Todos os direitos reservados - {user}</p>
      </footer>
    </>
  )
}