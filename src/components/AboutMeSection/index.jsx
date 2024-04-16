import styles from "./style.module.css";

export const AboutMe = () => {
  return (
    <section className="aboutMe-section">
      <div className={styles.aboutMe_container}>
        <h2 className="title md">Sobre mim</h2>
        <p className={styles.aboutMe_p}>
          Formado em Física pela Universidade Federal de Santa Catarina e em
          desenvolvimento Front-End pela Kenzie Academy. Gosto de praticar
          esportes, ler, viajar, aprender coisas novas e estudar línguas.
        </p>
      </div>
    </section>
  );
};
