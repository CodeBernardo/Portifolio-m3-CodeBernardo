import { user } from "../../data/user"
import image1 from "../../assets/whatsapp-icon.png";
import image2 from "../../assets/linkedin-icon.png";
import image3 from "../../assets/github-icon.png";
import styles from "./index.module.css"

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
      <hr />
        <div className={styles.footer__container}>
            <div className={styles.icons}>
              <h2 className="title-2">Contato</h2>
              <div className={styles.icons__container}>
                <img src={image1} alt="whatsapp icon" />
                <img src={image2} alt="likedin icon" />
                <img src={image3} alt="gitHub icon" />
              </div>
            </div>
          <p>Todos os direitos reservados - {user}</p>
        </div>
      <hr />
      </footer>
    </>
  )
}