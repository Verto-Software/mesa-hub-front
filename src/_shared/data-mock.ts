import { TMenuItems, TOrder } from '@/modules/order/interface';

export const orders: TOrder[] = [
   {
      id: '1',
      name: 'Marlon',
      number: '10',
      description: '',
   },
   {
      id: '2',
      name: 'Fulano',
      number: '90',
      description: '',
   },
   {
      id: '3',
      name: 'Ciclano',
      number: '43',
      description: '',
   },
   {
      id: '4',
      name: 'Beltrano',
      number: '14',
      description: '',
   },
   // {
   //    id: '5',
   //    name: 'Marlon',
   //    number: '10',
   //    description: '',
   // },
   // {
   //    id: '6',
   //    name: 'Fulano',
   //    number: '90',
   //    description: '',
   // },
   // {
   //    id: '7',
   //    name: 'Marlon',
   //    number: '10',
   //    description: '',
   // },
   // {
   //    id: '8',
   //    name: 'Fulano',
   //    number: '90',
   //    description: '',
   // },
   // {
   //    id: '9',
   //    name: 'Marlon',
   //    number: '10',
   //    description: '',
   // },
   // {
   //    id: '10',
   //    name: 'Marlon',
   //    number: '10',
   //    description: '',
   // },
];

export const menuItems: TMenuItems[] = [
   { id: '1', item: 'Batata frita', price: 15, observation: '' },
   { id: '2', item: 'Hamburguer', price: 30, observation: '' },
   { id: '3', item: 'Coca-cola', price: 6, observation: '' },
];
