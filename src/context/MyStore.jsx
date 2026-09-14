import { createContext,useState } from "react";




export const MyStore = createContext()

export const ContextProvider = ({children})=>{

    const [cartItems, setCartItems] = useState([])
    const [toggle, setToggle] = useState(true)

    return (
      <MyStore.Provider value={{ cartItems, setCartItems, toggle, setToggle }}>
        {children}
      </MyStore.Provider>
    );
}