import Discription from "./Discription";
import Logo from "./Logo";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <Discription
        text="Це сайт підготовки до співбесіди 
      на пропозицію фронтенд"
      />
      <Discription text="Який я розробив на React" />
      <Logo />
    </div>
  );
}

export default Main;
