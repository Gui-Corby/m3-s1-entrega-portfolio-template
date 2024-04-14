import portfolio from "/src/assets/portfolio.png";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <ul className={styles.header_list}>
          <li>
            <img src={portfolio} alt="Portfólio" />
          </li>
          <div className={styles.anchor_list}>

          <li>Sobre</li>
          <li>Stack</li>
          <li>Projetos</li>

          </div>
          <li>
            <button>Contato</button>
          </li>
        </ul>
      </div>
    </header>
  );
};
