import "../styles/nav.css";
const Nav = () => {
  return (
    <nav>
      <div class="nav-logo">
        <h1>Logo</h1>
      </div>
      <div class="nav-links">
        <a href="">link1</a>
        <a href="">link2</a>
        <a href="">link3</a>
        <a href="">link4</a>
      </div>
      <div class="nav-search">
        <input type="text" placeholder="search" />
      </div>
      <div class="nav-btn">
        <button> Login </button>
        <button> Signup </button>
        <button> Cart </button>
      </div>
    </nav>
  );
};

export default Nav;
