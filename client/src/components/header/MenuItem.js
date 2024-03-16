import "./Menuitem.css";
import { Link } from "react-router-dom";

function MenuItem(props) {
  return (
    <button className="item">
      <Link to={props.nav}>{props.name}</Link>
    </button>
  );
}

export default MenuItem;
