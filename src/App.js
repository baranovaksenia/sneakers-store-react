// import logo from "./img/logo.png";
// import cart from "./img/cart.svg";
// import user from "./img/user.svg";
// import plus from "./img/plus.svg";
import item1 from "./img/sneakers/item1.jpg";
import search from "./img/search.svg";
// import heartUnliked from "./img/heartUnliked.svg";
import btnRemove from "./img/btnRemove.svg";
import arrow from "./img/arrow.svg";

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <Drawer />
      </div>

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src={search} alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
