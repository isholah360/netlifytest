import {createContext, useState} from 'react';


const CartContext = createContext()

export const CartProvider = ({children}) => {

const [show, setShow] = useState("ishola");
  return(
    <CartContext.Provider value={{show, setShow}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
