import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export type Order = {
   id: number;
   number: number;
   name: string;
   description: string;
};

const API_URL = 'http://localhost:5008/api/Orders';

async function fetchOrders() {
   const response = await fetch(API_URL, {
      headers: { Accept: 'application/json' },
   });
   if (!response.ok) throw new Error('Erro ao buscar ordens');
   return response.json();
}

async function createOrder(newOrder: Omit<Order, 'id'>) {
   const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
   });
   if (!response.ok) throw new Error('Erro ao criar ordem');
   return response.json();
}

async function deleteOrder(id: number) {
   const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
   });

   if (!response.ok) {
      throw new Error(`Erro ao deletar ordem: ${response.statusText}`);
   }

   return true;
}

export function useOrders() {
   return useQuery<Order[]>({
      queryKey: ['orders'],
      queryFn: fetchOrders,
   });
}

export function useCreateOrder() {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: createOrder,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ['orders'] });
      },
   });
}

export function useDeleteOrder() {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: deleteOrder,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ['orders'] });
      },
   });
}
