import { IUser } from "../../types/interfaces";
import "./navbar.css";

const Navbar: React.FunctionComponent<{ currentUser: IUser }> = ({
  currentUser,
}) => (
  <div className="c-nav__bar">
    <div className="c-nav__logoContainer">
      <div className="c-nav__logo" />
      <h2>Couch Finder</h2>
    </div>
    <h3 className="c-nav__userContainer">
      <span>
        {currentUser.isReturning ? "Welcome back" : "Welcome"}
        {currentUser.user.firstName}!
      </span>
    </h3>
  </div>
);

export default Navbar;
