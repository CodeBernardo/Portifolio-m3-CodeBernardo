import { technologies } from '../../../data/technologies';
import { TechCard } from './fragments/techCard';
import styles from './index.module.css';

export const TechsSection = () => {
  return (
    <section className={styles.techs__section} id="stacks">
      <h2 className="title-2">Tecnologias</h2>
      <ul>
        {technologies.map(({ name, img }, index) => {
          return <TechCard key={index} name={name} img={img} />;
        })}
      </ul>
    </section>
  );
};
