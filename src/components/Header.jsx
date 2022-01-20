import logo from "./../img/logo.png";
import cart from "./../img/cart.svg";
import user from "./../img/user.svg";

const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src={logo} alt="logo" width={40} height={40} />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">The best sneaker's store</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img src={cart} alt="cart" />
          <span>40 $</span>
        </li>
        <li>
          <img src={user} alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
