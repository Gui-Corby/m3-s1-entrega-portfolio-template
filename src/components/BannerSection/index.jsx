import banner from "/src/assets/banner-img.png";
import { username } from "../../data/user.js";
import styles from "./style.module.css";

export const BannerSection = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="container_left">
          <p className="paragraph blue">{username}</p>
          <h1 className="title lg">Bem vindo ao meu portfólio</h1>
          <p>Físico e Desenvolvedor Front-End</p>
          <button>Saiba mais</button>
        </div>

        <div className="container_right">
          <img src={banner} />
        </div>
      </div>
    </section>
  );
};
