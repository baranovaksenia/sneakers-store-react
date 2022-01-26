import styles from "./Drawer.module.scss";
import background from "./../../img/sneakers/item4.jpg";
const Drawer = (props) => {
  return (
    <div className="overlay">
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex items-center justify-between ">
          Cart
          <img
            className="cu-p"
            src="/img/btnRemove.svg"
            alt="remove"
            onClick={props.onClose}
          />
        </h2>

        <div className={styles.items}>
          <div className={styles.cartItem}>
            <div
              className={styles.cartItemImage}
              style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men's Shoes Nike Blazer Mid Suede</p>
              <b>499 $</b>
            </div>
            <img
              className={styles.removeBtn}
              src="/img/btnRemove.svg"
              alt="remove"
            />
          </div>
        </div>
        <div className={styles.cartTotalBlock}>
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
          <button className={styles.greenButton}>
            Place your order
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
