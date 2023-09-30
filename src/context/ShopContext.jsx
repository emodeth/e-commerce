import { createContext, useContext, useState } from "react";
import { items } from "../components/AllData";
import toast from "react-hot-toast";

const ShopContext = createContext();
const initialQty = {};

for (let i = 1; i < items.length + 1; i++) {
  initialQty[i] = 1;
}

function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [qty, setQty] = useState(initialQty);

  let foundProduct;
  function onAdd(product, quantity) {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQty((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.id === product.id)
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
      });

      setCartItems(updatedItems);
    } else {
      product.quantity = quantity;

      setCartItems((cartItems) => [...cartItems, { ...product }]);
    }

    toast.success(`${quantity} ${product.description} added to the cart.`);
    setQty((prevQty) => ({ ...prevQty, [product.id]: 1 }));
  }

  function toggleCartItemQuantity(id, value) {
    foundProduct = cartItems.find((item) => Number(item.id) === Number(id));
    const newCartItems = cartItems.filter((item) => item.id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevPrice) => prevPrice + foundProduct.price);
      setTotalQty((prevQty) => prevQty + 1);
    } else if (value === "dec" && foundProduct.quantity > 1) {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity - 1 },
      ]);
      setTotalPrice((prevPrice) => prevPrice - foundProduct.price);
      setTotalQty((prevQty) => prevQty - 1);
    }
  }

  function incQty(id) {
    setQty((prevQty) => ({ ...prevQty, [id]: prevQty[id] + 1 }));
  }

  function decQty(id) {
    setQty((prevQty) => {
      if (prevQty[id] < 2) return { ...prevQty, [id]: 1 };
      return { ...prevQty, [id]: prevQty[id] - 1 };
    });
  }

  function onDelete(id) {
    const [currentItem] = cartItems.filter((item) => item.id === id);
    const newArray = cartItems.filter((item) => item.id !== id);
    setCartItems(newArray);
    setTotalPrice(
      (prevPrice) => prevPrice - currentItem.price * currentItem.quantity
    );
    setTotalQty((prevQty) => prevQty - currentItem.quantity);
  }

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        totalPrice,
        totalQty,
        qty,
        incQty,
        decQty,
        onAdd,
        onDelete,
        toggleCartItemQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

function useShop() {
  const context = useContext(ShopContext);
  return context;
}

export { ShopProvider, useShop };
