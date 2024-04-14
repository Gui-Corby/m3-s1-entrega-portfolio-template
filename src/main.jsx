import React from "react";
import ReactDOM from "react-dom/client"
import "./styles/reset.css";
import "./styles/globalStyles.css";
import "./styles/typograph.css";
import "./styles/grid.css"
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
