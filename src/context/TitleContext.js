import { createContext, useContext, useState } from "react";
// import { Outlet } from 'react-router-dom';

export const TitleContext = createContext()
export const useTitle = () => useContext(TitleContext)

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState("")

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  )
}