import { useQuery } from "@tanstack/react-query";
import { api } from "../../api";

export interface Category {
  id: number;
  name: string;
}

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      const res = await fetch(`${api}/categories`);
      return res.json();
    },
  });
};
