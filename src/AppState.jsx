import { useContext, useEffect, createContext, useState } from "react";

const Context = createContext();

function ContextFunction({ children }) {
  let [cart, setCart] = useState([]);
  let [showCart, setShowCart] = useState(false);
  let [totalItems, setTotalItems] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);
  let [lastViewed, setLastViewed] = useState([]);
  let handleAdd = (id) => {
    let newArray = cart;
    cart.map((e, i) => {
      e.id == id ? (newArray[i].number += 1) : "";
    });
    setCart([...newArray]);
    updateItems();
    calculateTotalPrice();
  };
  function updateItems() {
    function getTotalItems(cart) {
      let total = 0;
      cart.forEach((e) => {
        total += e.number;
      });
      return total;
    }
    setTotalItems(getTotalItems(cart));
  }

  let handleRemove = (id) => {
    let newArray = cart;
    cart?.map((e, i) => {
      e.id == id ? (newArray[i].number -= 1) : "";
      e.number == 0 ? newArray.splice(i, 1) : "";
    });
    setCart([...newArray]);
    updateItems();
    calculateTotalPrice();
  };
  const addToCart = (item) => {
    function checkDuplicate(arr, item) {
      let newItem = item;
      let res = false;
      arr.forEach((e, i) => {
        e.id == newItem.id ? (res = true) : "";
      });
      return res;
    }
    let check = checkDuplicate(cart, item);
    if (!check) {
      let newItem = item;
      let newArray = cart;
      newArray.unshift(newItem);
      setCart([...newArray]);
    } else {
      let newArray = cart;
      let newItem = item;
      cart.forEach((e, i) => {
        if (e.id == newItem.id) {
          item.number += e.number;
          newArray.splice(i, 1);
          newArray.unshift(newItem);
          setCart([...newArray]);
        }
      });
    }

    updateItems();
    calculateTotalPrice();
  };

  function calculateTotalPrice() {
    let total = 0;

    cart?.forEach((e) => (total += e.number * e.price));
    setTotalPrice(total);
    console.log(cart);
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cart,
        setCart,
        handleAdd,
        handleRemove,
        totalItems,
        updateItems,
        addToCart,
        totalPrice,
        setLastViewed,
        lastViewed
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextFunction; // this function will wrap with it any Component we want to pass our state to

export let AppState = () => {
  return useContext(Context); // this is our context , having our data
};
