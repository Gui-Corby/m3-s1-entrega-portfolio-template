import { username } from "../../data/user";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2 className="title md">Contato</h2>
        <ul>
          <li>
            <a>
              <img src="/src/assets/whatsapp-icon.png" />
            </a>
          </li>
          <li>
            <a>
              <img src="/src/assets/linkedin-icon.png" />
            </a>
          </li>
          <li>
            <a>
              <img src="/src/assets/github-icon.png" />
            </a>
          </li>
        </ul>
        <p>Todos os direitos reservados - {username}</p>
      </div>
    </footer>
  );
};
