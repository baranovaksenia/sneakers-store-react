import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="img/logo.png" alt="logo" width={40} height={40} />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">The best sneaker's store</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img src="img/cart.svg" alt="cart" />
          <span>40 $</span>
        </li>
        <li>
          <img src="img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
