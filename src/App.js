import logo from "./img/logo.png";
import cart from "./img/cart.svg";
import user from "./img/user.svg";
import plus from "./img/plus.svg";
import item1 from "./img/sneakers/item1.jpg";
import search from "./img/search.svg";
import heartUnliked from "./img/heartUnliked.svg";
import btnRemove from "./img/btnRemove.svg";
import arrow from "./img/arrow.svg";

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex items-center justify-between ">
            Cart
            <img className="cu-p" src={btnRemove} alt="remove" />
          </h2>

          <div className="items">
            <div className="cart-item mb-20 d-flex align-center">
              <div
                className="cart-item-image"
                style={{ backgroundImage: `url(${item1})` }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Men's Shoes Nike Blazer Mid Suede</p>
                <b>499 $</b>
              </div>
              <img className="remove-btn" src={btnRemove} alt="remove" />
            </div>

            <div className="cart-item mb-20 d-flex align-center">
              <div
                className="cart-item-image"
                style={{ backgroundImage: `url(${item1})` }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Men's Shoes Nike Blazer Mid Suede</p>
                <b>499 $</b>
              </div>
              <img className="remove-btn" src={btnRemove} alt="remove" />
            </div>

            <div className="cart-item mb-20 d-flex align-center">
              <div
                className="cart-item-image"
                style={{ backgroundImage: `url(${item1})` }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Men's Shoes Nike Blazer Mid Suede</p>
                <b>499 $</b>
              </div>
              <img className="remove-btn" src={btnRemove} alt="remove" />
            </div>
          </div>
          <div className="cart-total-block">
            <ul>
              <li>
                <span>Total: </span>
                <div></div>
                <b>1024 $</b>
              </li>
              <li>
                <span>Tax 18%: </span>
                <div></div>
                <b>189 $</b>
              </li>
            </ul>
            <button className="green-button">
              Place your order
              <img src={arrow} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>

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
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src={search} alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src={heartUnliked} alt="unliked" />
            </div>
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
