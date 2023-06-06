import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import Welcomepage from "./components/Welcomepage/Welcomepage";
import { Routes, Route, HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Welcomepage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
