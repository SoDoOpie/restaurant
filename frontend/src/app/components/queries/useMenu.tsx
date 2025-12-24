import { useQuery } from "@tanstack/react-query";
import { api } from "../../api";
import { MenuItemProps } from "../MenuItem";

export const useMenu = (category_id: number | undefined) => {
  return useQuery({
    queryKey: ["menu", category_id],
    queryFn: async (): Promise<MenuItemProps[]> => {
      const res = await fetch(`${api}/categories/${category_id}/menu-items/`);
      return res.json();
    },
    enabled: !!category_id,
  });
};
