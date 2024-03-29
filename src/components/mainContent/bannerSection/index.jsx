import { username } from '../../../data/user';
import styles from './index.module.css';
import banner from '../../../assets/banner-img.png';

export const BannerSection = () => {
  return (
    <>
      <section className={styles.banner__section}>
        <div className={styles.banner__container}>
          <p className={styles.username}>{username}</p>
          <h2 className="title-1">Bem vindo ao meu portifólio</h2>
          <p className="text-1">
            “Superar é transformar obstáculos em degraus na escada do sucesso.”
          </p>
          <button className={styles.banner__button}>Saiba mais</button>
        </div>
        <img src={banner} className={styles.banner__image} />
      </section>
    </>
  );
};
