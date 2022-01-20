import item1 from "./../img/sneakers/item1.jpg";
import btnRemove from "./../img/btnRemove.svg";
import arrow from "./../img/arrow.svg";

const Drawer = () => {
  return (
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
  );
};

export default Drawer;
