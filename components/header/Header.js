import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
          alt="logo"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <i class="material-symbols-outlined">shopping_cart</i>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
