import { useQuery } from "@tanstack/react-query";
import { api } from "../../api";

export interface CategoriesResponse {
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
}

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<CategoriesResponse> => {
      const res = await fetch(`${api}/categories`);
      return res.json();
    },
  });
};
