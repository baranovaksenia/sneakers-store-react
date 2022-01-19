import logo from "./img/logo.png";
import cart from "./img/cart.svg";
import user from "./img/user.svg";
import plus from "./img/plus.svg";
import item1 from "./img/sneakers/item1.jpg";
function App() {
  return (
    <div className="wrapper clear">
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

      <div className="content p-40">
        <h1 className="mb-40">All Sneakers</h1>

        <div className="d-flex">
          <div className="card">
            <img src={item1} alt="Sneakers" width={133} height={112} />
            <h5>Men's Shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>499 $</b>
              </div>
              <button className="button">
                <img src={plus} width={11} height={11} alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src={item1} alt="Sneakers" width={133} height={112} />
            <h5>Men's Shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>499 $</b>
              </div>
              <button className="button">
                <img src={plus} width={11} height={11} alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src={item1} alt="Sneakers" width={133} height={112} />
            <h5>Men's Shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>499 $</b>
              </div>
              <button className="button">
                <img src={plus} width={11} height={11} alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src={item1} alt="Sneakers" width={133} height={112} />
            <h5>Men's Shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>499 $</b>
              </div>
              <button className="button">
                <img src={plus} width={11} height={11} alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
