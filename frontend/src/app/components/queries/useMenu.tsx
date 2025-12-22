import { useQuery } from "@tanstack/react-query";
import { api } from "../../api";
import { MenuItemProps } from "../MenuItem";

export interface MenuResponse {
  [category: string]: MenuItemProps[];
}

export const useMenu = () => {
  return useQuery({
    queryKey: ["menu"],
    queryFn: async (): Promise<MenuResponse> => {
      const res = await fetch(`${api}/categories/menu-items`);
      return res.json();
    },
  });
};
