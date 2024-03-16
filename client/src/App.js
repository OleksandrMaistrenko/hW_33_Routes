import "./style.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Route, Routes } from "react-router-dom";
import Materials from "./components/materials/Materials";
import Contacts from "./components/contacts/Contacts";
import Questions from "./components/questions/Questions";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;
