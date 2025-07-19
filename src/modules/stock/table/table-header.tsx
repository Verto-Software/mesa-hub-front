import { TableHead, TableHeader, TableRow } from '@/_shared/components/ui/table';

interface TTHeader {
   itemsHead: string[];
}

export function THeader({ itemsHead }: TTHeader) {
   return (
      <TableHeader>
         <TableRow>
            {itemsHead.map((itemHead) => (
               <TableHead
                  key={itemHead}
                  className='text-gray-500 pl-4'
               >
                  {itemHead}
               </TableHead>
            ))}
         </TableRow>
      </TableHeader>
   );
}
