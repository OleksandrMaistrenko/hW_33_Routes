import MenuItem from "./MenuItem";
import "./Header.css";
import { Link } from "react-router-dom";
import Home from "../routes/Home";
import Questions from "../questions/Questions";

function Header() {
  return (
    <div className="header">
      <nav>
        <MenuItem name="Home" nav="/" />
        <MenuItem name="Questions" nav="/questions" />
        <MenuItem name="Materials" nav="/materials" />
        <MenuItem name="Contacts" nav="/contacts" />
      </nav>
    </div>
  );
}

export default Header;
