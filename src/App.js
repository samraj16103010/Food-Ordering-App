import React,{Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";



function App() {
  const [showCartItem,setShowCartItem] = useState(false);

  const showCartHandler = () => {
    setShowCartItem(true);
  }
  
  const hideCartHandler = () => {
    setShowCartItem(false);
  }

  return (
    <Fragment>
      <Header onShowCart = {showCartHandler}/>
      {showCartItem && <Cart onHideCart = {hideCartHandler}/>}
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
