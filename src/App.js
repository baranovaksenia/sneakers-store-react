import React from "react";

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const products = [
  {
    title: "Men's Shoes Nike Blazer Mid Suede",
    price: 499,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Men's Shoes Nike Air Max 270",
    price: 380,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Men's Shoes Nike Blazer Mid Suede",
    price: 245,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Men's Shoes Aka Boku Future Rider",
    price: 245,
    imageUrl: "/img/sneakers/4.jpg",
  },
  {
    title: "Men's Shoes Under Armour Curry 8",
    price: 489,
    imageUrl: "/img/sneakers/5.jpg",
  },
  {
    title: "Men's Shoes Nike Kyrie 7",
    price: 410,
    imageUrl: "/img/sneakers/6.jpg",
  },
  {
    title: "Men's Shoes Jordan Air Jordan 11",
    price: 340,
    imageUrl: "/img/sneakers/7.jpg",
  },
  {
    title: "Men's Shoes Nike LeBron XVIII",
    price: 510,
    imageUrl: "/img/sneakers/8.jpg",
  },
];
function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://61f03e7d732d93001778e963.mockapi.io/items")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json);
      });
  });

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavorite={() => console.log(`Added to favorite`)}
              onClickAdd={() => console.log(`added to the shopping cart`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
