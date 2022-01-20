import plus from "./../img/plus.svg";
import item1 from "./../img/sneakers/item1.jpg";
import heartUnliked from "./../img/heartUnliked.svg";

const Card = () => {
  return (
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
  );
};

export default Card;
