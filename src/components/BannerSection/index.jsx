import banner from "/src/assets/banner-img.png";
import { username } from "../../data/user.js";
import styles from "./style.module.css";

export const BannerSection = () => {
  return (
    <section className="banner-section">
      <div className={styles.banner_container}>
        <div className="container_left">
          <p className="paragraph blue">{username}</p>
          <h1 className="title lg">Bem vindo ao meu portfólio</h1>
          <p className={styles.paragraph_interest}>Físico e Desenvolvedor Front-End</p>
          <button>Saiba mais</button>
        </div>

        <div className="container_right">
          <img id={styles.banner_img} src={banner} />
        </div>
      </div>
    </section>
  );
};
