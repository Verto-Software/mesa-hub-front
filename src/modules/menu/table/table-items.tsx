import { Badge } from '@/_shared/components/ui/badge';
import { Button } from '@/_shared/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/_shared/components/ui/table';
import { Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { TItemsMenu } from '../interface';

export function TableItems() {
   const itemsHead = ['Imagem', 'Nome', 'Categoria', 'Preço', 'Descrição', 'Ações'];

   const itemsMenu: TItemsMenu[] = [
      {
         id: '1',
         image: 'https://png.pngtree.com/png-clipart/20240901/original/pngtree-hamburger-png-image_15905798.png',
         name: 'Hamburguer',
         category: 'Lanche',
         price: 15,
         description: 'Pão macio, carne suculenta e queijo derretido.',
      },
   ];

   return (
      <div className='px-6 pb-6'>
         <div className='border border-gray-200 rounded-md'>
            <Table>
               <TableHeader>
                  <TableRow>
                     {itemsHead.map((itemHead) => (
                        <TableHead
                           key={itemHead}
                           className='text-gray-500 pl-6'
                        >
                           {itemHead}
                        </TableHead>
                     ))}
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {itemsMenu.map((itemMenu) => (
                     <TableRow
                        key={itemMenu.id}
                        className='hover:bg-muted/50 border-b border-gray-200'
                     >
                        <TableCell className='px-6 py-4 text-base'>
                           <Image
                              className='object-contain'
                              src={itemMenu.image}
                              alt={itemMenu.name}
                              height={50}
                              width={50}
                           />
                        </TableCell>
                        <TableCell className='px-6 py-4 text-base font-medium'>{itemMenu.name}</TableCell>
                        <TableCell className='px-6 py-4 text-base'>
                           <Badge className='bg-gray-100 text-gray-800'>{itemMenu.category}</Badge>
                        </TableCell>
                        <TableCell className='px-6 py-4 text-base font-semibold text-green-600'>
                           R${' '}
                           {itemMenu.price.toLocaleString('pt-BR', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                           })}
                        </TableCell>
                        <TableCell className='px-6 py-4 text-base'>
                           <p className='max-w-96 overflow-hidden line-clamp-2 text-ellipsis whitespace-normal text-gray-500'>
                              {itemMenu.description}
                           </p>
                        </TableCell>
                        <TableCell className='px-6 py-4 text-base'>
                           <div className='flex gap-2'>
                              <Button
                                 className='cursor-pointer'
                                 variant='outline'
                                 size='sm'
                              >
                                 <Edit size={16} />
                              </Button>
                              <Button
                                 className='cursor-pointer'
                                 variant='destructive'
                                 size='sm'
                              >
                                 <Trash2 size={16} />
                              </Button>
                           </div>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
      </div>
   );
}
