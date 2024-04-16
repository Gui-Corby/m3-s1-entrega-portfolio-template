import portfolio from "/src/assets/portfolio.png";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.header_container}>
        <ul className={styles.header_list}>
          <li>
            <img src={portfolio} alt="Portfólio" />
          </li>
          <div className={styles.anchor_list}>
            <li id={styles.header_anchor_item}>Sobre</li>

            <li id={styles.header_anchor_item}>Stack</li>

            <li id="header_anchor_item">Projetos</li>
          </div>
          <li>
            <a href="#footer">
              <button>Contato</button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
