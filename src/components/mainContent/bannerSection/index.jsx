import { username } from "../../../data/user"

export const BannerSection = () => {
  return (
    <>
      <section>
        <div>
          <p>{username}</p>
          <h2>Bem vindo ao meu portifólio</h2>
          <p>“Superar é transformar obstáculos em degraus na escada do sucesso.”</p>
          <button>Saiba mais</button>
        </div>
        <img src="../../../src/assets/banner-img.png" alt="banner image" />
      </section>
    </>
  )
}