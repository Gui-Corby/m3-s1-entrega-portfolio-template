import { username } from "../../data/user";
import styles from "./style.module.css";
import gitHubIcon from "../../assets/github-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import whatsappIcon from "../../assets/whatsapp-icon.png";


export const Footer = () => {
  return (
    <footer id="footer">
      <div className={styles.container_footer}>
        <div className={styles.footer_border}>
          <div className={styles.footer_media}>
            <h2 className="title md">Contato</h2>
            <ul className={styles.footer_list}>
              <li>
                <a>
                  <img src={whatsappIcon} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/guilherme-corby-345453203/"
                target="_blank">
                  <img src={linkedinIcon} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Gui-Corby"
                target="_blank">
                  <img src={gitHubIcon} />
                </a>
              </li>
            </ul>
          </div>

          <p className={styles.footer_rights}>
            Todos os direitos reservados - {username}
          </p>
        </div>
      </div>
    </footer>
  );
};
