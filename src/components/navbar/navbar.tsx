import { TUser } from "../../types/types";
import "./navbar.css";

const Navbar: React.FunctionComponent<{ currentUser: TUser }> = ({
  currentUser,
}) => (
  <div className="c-nav__bar">
    <div className="c-nav__logoContainer">
      <div className="c-nav__logo" />
      <h2>Couch Finder</h2>
    </div>
    <h3 className="c-nav__userContainer">
      <span>
        {currentUser.isReturning ? "Welcome back" : "Welcome"}{" "}
        {currentUser.user.firstName}!
      </span>
    </h3>
  </div>
);

export default Navbar;
