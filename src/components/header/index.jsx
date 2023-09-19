import styles from "./index.module.css"

export const Header = () => {
  return (
    <>
      <header>
        <h1>Portifólio</h1>
        <nav>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Stack</a></li>
            <li><a href="#">Projetos</a></li>
          </ul>
          <button>Contato</button>
        </nav>
      </header>
    </>
  )
}