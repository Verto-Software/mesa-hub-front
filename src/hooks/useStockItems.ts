import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export type StockItem = {
   id: string;
   itemName: string;
   itemQuantity: number;
   purchasePrice: number;
   sellingPrice: number;
   minimumStock: number;
   maximumStock: number;
   supplier: string;
   itemDescription: string;
};

const API_URL = "http://localhost:5157/api/StockItems";

export function useStockItems() {
   return useQuery<StockItem[]>({
      queryKey: ["stockItems"],
      queryFn: async () => {
         const res = await fetch(API_URL);
         if (!res.ok) throw new Error("Erro ao buscar itens do estoque");
         return res.json();
      },
   });
}

export function useAddStockItem() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: async (item: Omit<StockItem, "id">) => {
         const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
         });
         if (!res.ok) throw new Error("Erro ao adicionar item ao estoque");
         return res.json();
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["stockItems"] });
      },
   });
}

export function useDeleteStockItem() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: async (id: string) => {
         const res = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
         });
         if (!res.ok) throw new Error("Erro ao excluir item do estoque");
         return id;
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["stockItems"] });
      },
   });
}

export function useUpdateStockItem() {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: async (item: StockItem) => {
         const res = await fetch(`${API_URL}/${item.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
         });
         if (!res.ok) throw new Error("Erro ao atualizar item do estoque");
         if (res.status === 204) return null;
         return res.json();
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["stockItems"] });
      },
   });
}
