import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type MenuItem = {
   id: string;
   image: string;
   name: string;
   category: string;
   price: number;
   description: string;
};

const API_URL = "http://localhost:5157/api/MenuItems";

export function useMenuItems() {
   return useQuery<MenuItem[]>({
      queryKey: ["menuItems"],
      queryFn: async () => {
         const res = await fetch(API_URL);
         if (!res.ok) throw new Error("Erro ao buscar itens do cardápio");
         return res.json();
      },
   });
}

export function useAddMenuItem() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: async (item: MenuItem) => {
         const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
         });
         if (!res.ok) throw new Error("Erro ao adicionar item ao cardápio");
         return res.json();
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["menuItems"] });
      },
   });
}

export function useEditMenuItem() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: async (item: MenuItem) => {
         const res = await fetch(`${API_URL}/${item.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
         });
         if (!res.ok) throw new Error("Erro ao editar item do cardápio");
         if (res.status === 204) return null;
         return res.json();
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["menuItems"] });
      },
   });
}

export function useDeleteMenuItem() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: async (id: string) => {
         const res = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
         });
         if (!res.ok) throw new Error("Erro ao excluir item do cardápio");
         if (res.status === 204) return null;
         return res.json();
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["menuItems"] });
      },
   });
}
