import styles from "./index.module.css"
import logo from "../../assets/portfolio.png"


export const Header = () => {
  return (
    <>
      <header className={styles.app__header}>
        <nav>
        <img src={logo} alt="portifolio logo" className={styles.header__logo} />
          <ul className={styles.nav__items}>
            <li><a href="#about" className="label" >Sobre</a></li>
            <li><a href="#stacks" className="label" >Stack</a></li>
            <li><a href="#projects" className="label" >Projetos</a></li>
          </ul>
          <button className={styles.contact__btn}>Contato</button>
        </nav>
      </header>
    </>
  )
}