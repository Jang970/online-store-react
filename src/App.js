import Cart from "./components/Cart";
import ItemsDisplay from "./components/ItemsDisplay";
import NavBar from "./components/NavBar";
import Filters from "./components/Filters";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [exampleItemList, setDefaultItems] = useState([]);
  const [filterTitle, setFilterTitle] = useState("All");

  // getting item data from a backend server (generated using json-server)
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setDefaultItems(tasksFromServer);
      setItemsList(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const result = await fetch("http://localhost:5000/items");
    // converting from json to a javascript object
    const data = await result.json();

    return data;
  };
  const inCart = false;

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const changeItems = (filter) => {
    if (filter === "All") {
      setItemsList(exampleItemList);
      setFilterTitle("All");
    } else {
      setItemsList(
        exampleItemList.filter(
          (item) => item.category.toLowerCase() === filter.toLowerCase()
        )
      );
      setFilterTitle(filter);
    }
  };

  const removeItem = (itemName) => {
    setCartItems(cartItems.filter((item) => item.name !== itemName));
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <NavBar
                cartAmount={cartItems}
                defaultItems={exampleItemList}
                setListItems={setItemsList}
                inCart={inCart}
              />
              <h2>Our Products: {filterTitle}</h2>
              <Filters clickEvent={changeItems} />
              <ItemsDisplay itemsToDisplay={itemsList} addToCart={addToCart} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartAmount={cartItems}
              defaultItems={exampleItemList}
              setListItems={setItemsList}
              inCart={!inCart}
              removeItem={removeItem}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
