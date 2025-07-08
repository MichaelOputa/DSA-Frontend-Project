/* eslint-disable react-refresh/only-export-components */
import React, { type ReactNode } from 'react'
import { createContext, useContext } from 'react'

interface ShopContextType {
  backendUrl: string;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined)

interface ShopContextProviderProps {
  children:ReactNode
}
  
const ShopContextProvider: React.FC <ShopContextProviderProps> = (props) => {
  const backendUrl = "https://dsa-mentorship-project.onrender.com";

  const value : ShopContextType = {
    backendUrl
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}

    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  return useContext(ShopContext)
}

export default ShopContextProvider