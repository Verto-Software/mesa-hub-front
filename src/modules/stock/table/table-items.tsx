import { cn } from '@/_lib/utils';
import { Badge } from '@/_shared/components/ui/badge';
import { Button } from '@/_shared/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/_shared/components/ui/table';
import { Edit, Trash2 } from 'lucide-react';
import { TItemMenu } from '../interface';
import { THeader } from './table-header';

export function TableItems() {
   const itemsHead = [
      'Nome',
      'Quant.',
      'Min / Max',
      'Preço de Compra',
      'Preço de Venda',
      'Descrição',
      'Fornecedor',
      'Status',
      'Ação',
   ];

   const itemsMenu: TItemMenu[] = [
      {
         id: '1',
         itemname: 'Original',
         itemquantity: '10',
         purchaseprice: 10,
         sellingprice: 15,
         currentstock: '10',
         minimumstock: '10',
         maximumstock: '50',
         supplier: 'Fulano Ciclano Beltrano',
         category: 'Lanche',
         itemdescription: 'Pão macio, carne suculenta e queijo derretido.',
         get status() {
            const current = parseInt(this.currentstock);
            const min = parseInt(this.minimumstock);
            if (current <= min) return 'Baixo';
            return 'Normal';
         },
      },
   ];

   return (
      <div className='px-6 pb-6'>
         <div className='border border-gray-200 rounded-md w-full'>
            {itemsMenu?.length === 0 ? (
               <p className='text-gray-500 p-6 text-center'>Você não possui item no estoque.</p>
            ) : (
               <Table>
                  <THeader itemsHead={itemsHead} />

                  <TableBody>
                     {itemsMenu?.map((itemMenu) => (
                        <TableRow
                           key={itemMenu.id}
                           className='hover:bg-muted/50 border-b border-gray-200'
                        >
                           <TableCell className='px-4 py-4'>{itemMenu.itemname}</TableCell>
                           <TableCell className='px-4 py-4'>{itemMenu.itemquantity}</TableCell>
                           <TableCell className='px-4 py-4'>
                              {itemMenu.minimumstock} / {itemMenu.maximumstock}
                           </TableCell>
                           <TableCell className='px-4 py-4'>
                              R${' '}
                              {itemMenu.purchaseprice.toLocaleString('pt-BR', {
                                 minimumFractionDigits: 2,
                                 maximumFractionDigits: 2,
                              })}
                           </TableCell>
                           <TableCell className='px-4 py-4'>
                              R${' '}
                              {itemMenu.sellingprice.toLocaleString('pt-BR', {
                                 minimumFractionDigits: 2,
                                 maximumFractionDigits: 2,
                              })}
                           </TableCell>
                           <TableCell className='px-4 py-4'>
                              <p className='max-w-96 overflow-hidden line-clamp-2 text-ellipsis whitespace-normal text-gray-500'>
                                 {itemMenu.itemdescription}
                              </p>
                           </TableCell>
                           <TableCell className='px-4 py-4'>{itemMenu.supplier}</TableCell>
                           <TableCell className='px-4 py-4'>
                              <Badge
                                 className={cn(
                                    itemMenu.status === 'Normal'
                                       ? 'bg-emerald-500 text-white'
                                       : 'bg-red-500 text-white',
                                    'rounded-full'
                                 )}
                              >
                                 {itemMenu.status}
                              </Badge>
                           </TableCell>
                           <TableCell className='py-4'>
                              <Button
                                 className='cursor-pointer'
                                 variant='ghost'
                                 size='sm'
                              >
                                 <Edit size={16} />
                              </Button>
                              <Button
                                 className='cursor-pointer'
                                 variant='ghost'
                                 size='sm'
                              >
                                 <Trash2 size={16} />
                              </Button>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            )}
         </div>
      </div>
   );
}
