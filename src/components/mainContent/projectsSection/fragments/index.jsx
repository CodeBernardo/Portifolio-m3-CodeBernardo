import icon from '../../../../assets/git-icon.png';
import styles from './index.module.css';

export const ProjectCard = ({ name, description }) => {
  return (
    <li className={styles.card__container}>
      <h3 className="title-3">{name}</h3>
      <p className="text-1">{description}</p>
      <a href="#" className="link">
        Saiba mais
      </a>
      <img src={icon} alt="git icon" className={styles.git__icon} />
    </li>
  );
};
