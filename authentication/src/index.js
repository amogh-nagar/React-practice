import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Authcontextprovider} from "./components/context/auth";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Authcontextprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Authcontextprovider>,
  document.getElementById("root")
);
