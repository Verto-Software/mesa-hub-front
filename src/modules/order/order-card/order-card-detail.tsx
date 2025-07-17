interface TOrderCardDetail {
   params: { id: string };
}

export function OrderCardDetail({ params }: TOrderCardDetail) {
   const { id } = params;

   const orders = [
      {
         id: '1',
         name: 'Marlon',
         number: '10',
         status: 'free',
         description: '',
      },
      {
         id: '2',
         name: 'Homem Aranha',
         number: '75',
         status: 'busy',
         description: '',
      },
      {
         description: '',
         id: '3',
         name: 'Pantera',
         number: '10',
         status: 'free',
      },
      {
         id: '4',
         name: 'Elvis',
         number: 'Superman',
         status: 'busy',
         description: '',
      },
   ];

   const order = orders.find((order) => order.id === id);

   return (
      <div>
         <p>Itens do Pedido</p>
         <ul>
            <li>{order?.name}</li>
            <li>{order?.number}</li>
            <li>{order?.status}</li>
         </ul>
      </div>
   );
}
