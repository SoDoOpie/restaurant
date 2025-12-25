import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api";
import { useCookies } from "react-cookie";

export interface MenuItemUpdatePayload {
  id: number;
  name?: string;
  description?: string;
  price?: number;
  prev_category_id: number;
  category_id?: number;
  image_url?: string;
  is_active?: boolean;
}

export interface CategoryUpdatePayload {
  id?: number;
  name?: string;
}

export const useUpdateMenuMutation = () => {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(["api-key"]);

  return useMutation({
    mutationKey: ["menu-update"],

    mutationFn: async ({
      id,
      prev_category_id,
      ...payload
    }: MenuItemUpdatePayload) => {
      const body = Object.fromEntries(
        Object.entries(payload).filter(([_, value]) => value !== undefined)
      );

      const res = await fetch(`${api}/menu-items/${id}/update/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": cookies["api-key"],
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error("Failed to update menu item");
      }

      return res.json();
    },

    onSuccess: (_, variables) => {
      console.log("variables", variables);
      if (
        variables.prev_category_id &&
        variables.category_id &&
        variables.prev_category_id !== variables.category_id
      ) {
        queryClient.invalidateQueries({
          queryKey: ["menu", variables.category_id],
        });
      }

      queryClient.invalidateQueries({
        queryKey: ["menu", variables.prev_category_id],
      });
    },
  });
};

export const useUpdateCategoriesMutation = () => {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(["api-key"]);

  return useMutation({
    mutationKey: ["categories-update"],

    mutationFn: async (data: CategoryUpdatePayload) => {
      const res = await fetch(`${api}/categories/${data.id}/update/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": cookies["api-key"],
        },
        body: JSON.stringify({ name: data.name }),
      });

      if (!res.ok) {
        throw new Error("Failed to update categories");
      }

      return res.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });
};

export const useAddCategoryMutation = () => {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(["api-key"]);

  return useMutation({
    mutationKey: ["category_add"],

    mutationFn: async (data: string) => {
      const res = await fetch(`${api}/categories/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": cookies["api-key"],
        },
        body: JSON.stringify({ name: data }),
      });

      if (!res.ok) {
        throw new Error("Failed to add category");
      }

      return res.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });
};

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(["api-key"]);

  return useMutation({
    mutationKey: ["cat-delete"],

    mutationFn: async (id: number) => {
      const res = await fetch(`${api}/categories/${id}/delete/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": cookies["api-key"],
        },
      });

      if (!res.ok) {
        throw new Error("Failed to detele category");
      }

      return res.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });
};

export interface MenuItemAddPayload {
  name: string;
  description: string;
  price: number;
  category: number;
  image_url: string;
  is_active: boolean;
}

export const useAddMenuItemMutation = () => {
  const queryClient = useQueryClient();
  const [cookies] = useCookies(["api-key"]);

  return useMutation({
    mutationKey: ["menu_add"],

    mutationFn: async (data: MenuItemAddPayload) => {
      const res = await fetch(`${api}/menu-items/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": cookies["api-key"],
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to add category");
      }

      return res.json();
    },

    onSuccess: (variables) => {
      queryClient.invalidateQueries({
        queryKey: ["menu", variables.category],
      });
    },
  });
};
