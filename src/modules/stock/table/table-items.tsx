import { cn } from "@/_lib/utils";
import { Badge } from "@/_shared/components/ui/badge";
import { Button } from "@/_shared/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/_shared/components/ui/table";
import { Edit, Trash2 } from "lucide-react";
import { TItemMenu } from "../interface";
import { THeader } from "./table-header";
import { useStockItems, useDeleteStockItem } from "@/hooks/useStockItems";
import * as React from "react";
import { Dialog, DialogContent } from "@/_shared/components/ui/dialog";
import { FormAddItemStock } from "../form/form-add-item-stock";
import { FormStockSchema } from "../form/schema";

export function TableItems() {
   const itemsHead = [
      "Nome",
      "Quant.",
      "Min / Max",
      "Preço de Compra",
      "Preço de Venda",
      "Descrição",
      "Fornecedor",
      "Status",
      "Ação",
   ];

   const { data: itemsMenu, isLoading, isError } = useStockItems();
   const deleteStockItem = useDeleteStockItem();
   const [editItem, setEditItem] = React.useState<null | (Partial<FormStockSchema> & { id: string })>(null);
   const [openEdit, setOpenEdit] = React.useState(false);

   if (isLoading) {
      return <div className="px-6 pb-6">Carregando...</div>;
   }
   if (isError) {
      return <div className="px-6 pb-6 text-red-500">Erro ao carregar itens do estoque.</div>;
   }

   return (
      <div className="px-6 pb-6">
         <div className="border border-gray-200 rounded-md w-full">
            {!itemsMenu || itemsMenu.length === 0 ? (
               <p className="text-gray-500 p-6 text-center">Você não possui item no estoque.</p>
            ) : (
               <Table>
                  <THeader itemsHead={itemsHead} />
                  <TableBody>
                     {itemsMenu.map((itemMenu) => {
                        const current = itemMenu.itemQuantity;
                        const min = itemMenu.minimumStock;
                        const status = current <= min ? "Baixo" : "Normal";
                        return (
                           <TableRow
                              key={itemMenu.id}
                              className="hover:bg-muted/50 border-b border-gray-200"
                           >
                              <TableCell className="px-4 py-4">{itemMenu.itemName}</TableCell>
                              <TableCell className="px-4 py-4">{itemMenu.itemQuantity}</TableCell>
                              <TableCell className="px-4 py-4">
                                 {itemMenu.minimumStock} / {itemMenu.maximumStock}
                              </TableCell>
                              <TableCell className="px-4 py-4">
                                 R${" "}
                                 {itemMenu.purchasePrice.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                 })}
                              </TableCell>
                              <TableCell className="px-4 py-4">
                                 R${" "}
                                 {itemMenu.sellingPrice.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                 })}
                              </TableCell>
                              <TableCell className="px-4 py-4">
                                 <p className="max-w-96 overflow-hidden line-clamp-2 text-ellipsis whitespace-normal text-gray-500">
                                    {itemMenu.itemDescription}
                                 </p>
                              </TableCell>
                              <TableCell className="px-4 py-4">{itemMenu.supplier}</TableCell>
                              <TableCell className="px-4 py-4">
                                 <Badge
                                    className={cn(
                                       status === "Normal" ? "bg-emerald-500 text-white" : "bg-red-500 text-white",
                                       "rounded-full"
                                    )}
                                 >
                                    {status}
                                 </Badge>
                              </TableCell>
                              <TableCell className="py-4">
                                 <Button
                                    className="cursor-pointer"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                       setEditItem({
                                          ...itemMenu,
                                          itemname: itemMenu.itemName,
                                          itemquantity: String(itemMenu.itemQuantity),
                                          purchaseprice: String(itemMenu.purchasePrice),
                                          sellingprice: String(itemMenu.sellingPrice),
                                          minimumstock: String(itemMenu.minimumStock),
                                          maximumstock: String(itemMenu.maximumStock),
                                          itemdescription: itemMenu.itemDescription,
                                          supplier: itemMenu.supplier,
                                          id: itemMenu.id,
                                       });
                                       setOpenEdit(true);
                                    }}
                                 >
                                    <Edit size={16} />
                                 </Button>
                                 <Button
                                    className="cursor-pointer"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => deleteStockItem.mutate(itemMenu.id)}
                                    disabled={deleteStockItem.isPending}
                                 >
                                    <Trash2 size={16} />
                                 </Button>
                              </TableCell>
                           </TableRow>
                        );
                     })}
                  </TableBody>
               </Table>
            )}
            <Dialog
               open={openEdit}
               onOpenChange={setOpenEdit}
            >
               {editItem && (
                  <FormAddItemStock
                     handleCloseDialog={() => setOpenEdit(false)}
                     initialData={editItem}
                  />
               )}
            </Dialog>
         </div>
      </div>
   );
}

// Nenhum dado mockado presente, pois já removemos o array itemsMenu estático e usamos apenas dados da API.
