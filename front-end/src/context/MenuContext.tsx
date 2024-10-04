import { createContext, useContext, useState, type PropsWithChildren } from "react";
import api from "../api/api";
import useAuthContext from "./AuthContext";

interface MenuContext {
  menuItems: MenuItem[] | null;
  isLoading: boolean;

  fetchMenu: () => Promise<void>;
  createMenuItem: ({ ...menuItem }: {
    image: MenuItem["image"],
    title: MenuItem["title"],
    description: MenuItem["description"],
    price: MenuItem["price"],
    category: MenuItem["category"]
  }) => Promise<void>;

  updateMenuItem: (menuItem: MenuItem) => Promise<void>;
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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { csrf, getAccessToken } = useAuthContext()

  const fetchMenu = async () => {
    setIsLoading(() => true)
    await csrf()
    try {
      const { data } = await api.get<MenuItem[]>("/api/menu")
      setMenuItems(() => data)
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(() => false)
    }
  }

  const createMenuItem = async ({ ...menuItem }) => {
    setIsLoading(() => true)
    await csrf()
    try {
      const { data } = await api.post<MenuItem>("/api/menu/store", menuItem, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${getAccessToken()}`
        }
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(() => false)
    }
  }

  const updateMenuItem = async (menuItem: MenuItem) => {
    setIsLoading(() => true)
    try {
      const { data } = await api.put<MenuItem>(`/api/menu/update/${menuItem.id}`, {
        image: menuItem.image,
        title: menuItem.title,
        description: menuItem.description,
        price: menuItem.price,
        category: menuItem.category
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${getAccessToken()}`
        }
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(() => false)
    }
  }

  return (
    <MenuContext.Provider
      value={{
        fetchMenu,
        createMenuItem,
        updateMenuItem,
        menuItems,
        isLoading
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