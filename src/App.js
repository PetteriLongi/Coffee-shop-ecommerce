import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F4F2F2",
      main: "#000000",
    },
    secondary: {
      main: "#C17441",
    },
    error: {
      main: "#FF0000",
    },
    text: {
      light: "#ffffff",
      main: "#000000",
    },
  },
});

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleSelectedProduct = (newProduct) => {
    if (selectedProducts.some((cartItem) => cartItem.id === newProduct.id)) {
      setSelectedProducts((cart) =>
        cart.map((cartItem) =>
          cartItem.id === newProduct.id
            ? {
                ...cartItem,
                amount: cartItem.amount + 1,
              }
            : cartItem
        )
      );
      return;
    }
    setSelectedProducts((products) => [
      ...products,
      { ...newProduct, amount: 1 }, // <-- initial amount 1
    ]);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div style={{ height: "100%" }}>
        <Routes>
          <Route
            path="/"
            element={<Home handleSelectedProduct={handleSelectedProduct} />}
          />
          <Route
            path="/products"
            element={<Products handleSelectedProduct={handleSelectedProduct} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
