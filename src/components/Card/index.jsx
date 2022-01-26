import styles from "./Card.module.scss";
import React from "react";

const Card = (props) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickAdd = () => {
    setIsAdded(!isAdded);
  };
  const { title, price, imageUrl, onClickFavorite } = props;
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src="/img/heartUnliked.svg" alt="unliked" />
      </div>
      <img src={imageUrl} alt="Sneakers" width={133} height={112} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price: </span>
          <b>{price} $</b>
        </div>
        <img
          className={styles.add}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="add-button"
          onClick={onClickAdd}
        />
      </div>
    </div>
  );
};

export default Card;
