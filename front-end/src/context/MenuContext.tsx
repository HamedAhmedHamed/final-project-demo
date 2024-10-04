import { createContext, useContext, useState, type PropsWithChildren } from "react";
import api from "../api/api";
import useAuthContext from "./AuthContext";

interface MenuContext {
  menuItems: MenuItem[] | null
  fetchMenu: () => Promise<void>
}

const MenuContext = createContext<MenuContext | null>(null)

export enum Categories {
  all = "all",
  breakfast = "breakfast",
  mainDishes = "main-dishes",
  drinks = "drinks",
  desserts = "desserts"
}

export interface MenuItem {
  id: number;
  image: File | null;
  title: string;
  description: string;
  price: string;
  category: Categories;
  created_at: string;
  updated_at: string;
}


export const MenuProvider = ({ children }: PropsWithChildren) => {
  const [menuItems, setMenuItems] = useState<MenuItem[] | null>(null)
  const { csrf } = useAuthContext()

  const fetchMenu = async () => {
    await csrf()
    try {
      const { data } = await api.get<MenuItem[]>("/api/menu")
      setMenuItems(() => data)
      console.log(data)
    } catch (error) {
      console.log(error) 
    }
  }

  // const createMenuItem = async () => {
  //   await csrf()
  //   try {
  //     const { data } = await api.post('/api/menu/store', )
  //   } catch (error) {
  //     console.log(error) 
  //   }
  // }

  return (
    <MenuContext.Provider
      value={{
        fetchMenu,
        menuItems
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {
  const ctx = useContext(MenuContext) as MenuContext
  if (ctx === null)
    throw new Error("useMenu hook must be used within a MenuProvider!")
  return ctx
}