import { Badge } from "@/_shared/components/ui/badge";
import { Button } from "@/_shared/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/_shared/components/ui/table";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import { TItemsMenu } from "../interface";
import { useDeleteMenuItem, useMenuItems } from "@/hooks/useMenuItems";
import { Dialog } from "@/_shared/components/ui/dialog";
import { useState } from "react";
import { FormItemMenu } from "../form/form-add-item-menu";

export function TableItems() {
   const itemsHead = ["Imagem", "Nome", "Categoria", "Preço", "Descrição", "Ações"];
   const { data: itemsMenu, isLoading, isError } = useMenuItems();
   const [openEdit, setOpenEdit] = useState(false);
   const [selectedItem, setSelectedItem] = useState<TItemsMenu | null>(null);
   const deleteMenuItem = useDeleteMenuItem();

   function handleDeleteItem(id: string) {
      deleteMenuItem.mutate(id);
   }

   if (isLoading) {
      return <div className="px-6 pb-6">Carregando itens do cardápio...</div>;
   }
   if (isError) {
      return <div className="px-6 pb-6 text-red-500">Erro ao carregar itens do cardápio.</div>;
   }
   if (!itemsMenu || itemsMenu.length === 0) {
      return <div className="px-6 pb-6">Nenhum item encontrado.</div>;
   }
   return (
      <div className="px-6 pb-6">
         <Dialog
            open={openEdit}
            onOpenChange={setOpenEdit}
         >
            {selectedItem && (
               <FormItemMenu
                  handleCloseDialog={() => setOpenEdit(false)}
                  initialData={selectedItem}
               />
            )}
            <div className="border border-gray-200 rounded-md">
               <Table>
                  <TableHeader>
                     <TableRow>
                        {itemsHead.map((itemHead) => (
                           <TableHead
                              key={itemHead}
                              className="text-gray-500 pl-6"
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
                           className="hover:bg-muted/50 border-b border-gray-200"
                        >
                           <TableCell className="px-6 py-4">
                              <Image
                                 className="object-contain"
                                 src={
                                    itemMenu.image && itemMenu.image.trim() !== "" ? itemMenu.image : "/not-found.svg"
                                 }
                                 alt={itemMenu.name}
                                 height={60}
                                 width={60}
                              />
                           </TableCell>
                           <TableCell className="px-6 py-4 font-medium">{itemMenu.name}</TableCell>
                           <TableCell className="px-6 py-4">
                              <Badge className="bg-gray-100 text-gray-800">{itemMenu.category}</Badge>
                           </TableCell>
                           <TableCell className="px-6 py-4 font-semibold text-green-600">
                              R${" "}
                              {itemMenu.price.toLocaleString("pt-BR", {
                                 minimumFractionDigits: 2,
                                 maximumFractionDigits: 2,
                              })}
                           </TableCell>
                           <TableCell className="px-6 py-4">
                              <p className="max-w-96 overflow-hidden line-clamp-2 text-ellipsis whitespace-normal text-gray-500">
                                 {itemMenu.description}
                              </p>
                           </TableCell>
                           <TableCell className="px-6 py-4">
                              <Button
                                 className="cursor-pointer"
                                 variant="ghost"
                                 size="sm"
                                 onClick={() => {
                                    setSelectedItem(itemMenu);
                                    setOpenEdit(true);
                                 }}
                              >
                                 <Edit size={16} />
                              </Button>
                              <Button
                                 className="cursor-pointer"
                                 variant="ghost"
                                 size="sm"
                                 onClick={() => handleDeleteItem(itemMenu.id)}
                              >
                                 <Trash2 size={16} />
                              </Button>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>
         </Dialog>
      </div>
   );
}
