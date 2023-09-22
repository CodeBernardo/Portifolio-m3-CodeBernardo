import styles from './index.module.css';

export const TechCard = ({ name, img }) => {
  return (
    <li className={styles.card__container}>
      <img src={img} alt={`${name} icon`} />
      <h3 className="title-3">{name}</h3>
    </li>
  );
};
