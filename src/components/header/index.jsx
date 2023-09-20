import styles from "./index.module.css"
import logo from "../../assets/portfolio.png"


export const Header = () => {
  return (
    <>
      <header className={styles.app__header}>
        <img src={logo} alt="portifolio logo" className={styles.header__logo} />
        <nav>
          <ul className={styles.nav__items}>
            <li><a href="#" className="link" >Sobre</a></li>
            <li><a href="#" className="link" >Stack</a></li>
            <li><a href="#" className="link" >Projetos</a></li>
          </ul>
          <button className={styles.contact__btn}>Contato</button>
        </nav>
      </header>
    </>
  )
}