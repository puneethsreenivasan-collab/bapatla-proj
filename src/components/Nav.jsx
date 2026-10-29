import { Link } from "react-router-dom";
import "../styles/nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="nav-logo">
        <h1>Logo</h1>
      </div>
      <div class="nav-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/kids"}>kids</Link>
        <Link to={"/Men"}>Mens</Link>
        <Link to={"/women"}>womens</Link>
        <Link to={"/admin/createProduct"}> CreactProduct </Link>
      </div>
      <div class="nav-search">
        <input type="text" placeholder="search" />
      </div>
      <div class="nav-btn">
        <Link to={"/Login"}>
          {" "}
          <button> Login </button>{" "}
        </Link>
        <Link to={"/Reg"}>
          <button> Signup </button>{" "}
        </Link>
        <Link to={"/Cart"}>
          {" "}
          <button> Cart </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
