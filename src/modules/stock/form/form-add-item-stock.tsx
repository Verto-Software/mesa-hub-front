"use client";

import { DialogContent, DialogHeader, DialogTitle } from "@/_shared/components/ui/dialog";
import { formatPrice } from "@/_shared/utils/formatters-price";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { ButtonAddItemStock } from "./components/button-add-item-stock";
import { InputItemDescription } from "./components/input-item-description";
import { InputItemName } from "./components/input-item-name";
import { InputItemQuantity } from "./components/input-item-quantity";
import { InputMaximumStock } from "./components/input-maximum-stock";
import { InputMinimumStock } from "./components/input-minimum-stock";
import { InputPrices } from "./components/input-prices";
import { InputSupplier } from "./components/input-supplier";
import { FormStockSchema, StockSchema } from "./schema";
import { TFormAddItemStock } from "../interface";
import { useAddStockItem } from "@/hooks/useStockItems";
import { useUpdateStockItem } from "@/hooks/useStockItems";
import { useEffect } from "react";
import type { StockItem } from "@/hooks/useStockItems";

export function FormAddItemStock({
   handleCloseDialog,
   initialData,
}: TFormAddItemStock & { initialData?: Partial<FormStockSchema> }) {
   const t = useTranslations();
   const addStockItem = useAddStockItem();
   const updateStockItem = useUpdateStockItem();
   const isEdit = !!initialData;

   const {
      register,
      handleSubmit,
      watch,
      reset,
      setValue,
      control,
      formState: { errors },
   } = useForm<FormStockSchema>({
      resolver: zodResolver(StockSchema()),
      mode: "onBlur",
      defaultValues: initialData || {
         currentstock: "",
         itemdescription: "",
         itemname: "",
         itemquantity: "",
         maximumstock: "",
         minimumstock: "",
         purchaseprice: "",
         sellingprice: "",
         supplier: "",
      },
   });

   useEffect(() => {
      if (initialData) {
         reset(initialData);
      }
   }, [initialData, reset]);

   const sellingprice = watch("sellingprice");
   const purchaseprice = watch("purchaseprice");

   const handlePriceChange = (field: "purchaseprice" | "sellingprice", value: string) => {
      const formatted = formatPrice(value);
      setValue(field, formatted);
   };

   function handleSendFormStock(data: FormStockSchema) {
      if (isEdit && "id" in initialData && initialData.id) {
         const payload = {
            id: initialData.id,
            itemName: data.itemname,
            itemQuantity: Number(data.itemquantity),
            purchasePrice: data.purchaseprice
               ? Number(data.purchaseprice.replace(/[^\d.,-]/g, "").replace(",", "."))
               : 0,
            sellingPrice: data.sellingprice ? Number(data.sellingprice.replace(/[^\d.,-]/g, "").replace(",", ".")) : 0,
            minimumStock: data.minimumstock ? Number(data.minimumstock) : 0,
            maximumStock: data.maximumstock ? Number(data.maximumstock) : 0,
            supplier: data.supplier || "",
            itemDescription: data.itemdescription || "",
         };
         updateStockItem.mutate(payload as StockItem, {
            onSuccess: () => {
               reset();
               handleCloseDialog();
            },
            onError: (error: any) => {
               alert("Erro ao atualizar item do estoque: " + (error?.message || ""));
            },
         });
      } else {
         const payload = {
            id: crypto.randomUUID(),
            itemName: data.itemname,
            itemQuantity: Number(data.itemquantity),
            purchasePrice: data.purchaseprice
               ? Number(data.purchaseprice.replace(/[^\d.,-]/g, "").replace(",", "."))
               : 0,
            sellingPrice: data.sellingprice ? Number(data.sellingprice.replace(/[^\d.,-]/g, "").replace(",", ".")) : 0,
            minimumStock: data.minimumstock ? Number(data.minimumstock) : 0,
            maximumStock: data.maximumstock ? Number(data.maximumstock) : 0,
            supplier: data.supplier || "",
            itemDescription: data.itemdescription || "",
         };
         addStockItem.mutate(payload, {
            onSuccess: () => {
               reset();
               handleCloseDialog();
            },
            onError: (error: any) => {
               alert("Erro ao adicionar item ao estoque: " + (error?.message || ""));
            },
         });
      }
   }

   return (
      <DialogContent className="select-none">
         <form onSubmit={handleSubmit(handleSendFormStock)}>
            <fieldset className="space-y-5">
               <DialogHeader>
                  <DialogTitle>
                     <legend>{t("AddItemToStock")}</legend>
                  </DialogTitle>
               </DialogHeader>
               <div className="flex gap-2 w-full">
                  <InputItemName
                     errors={errors}
                     register={register}
                  />
                  <InputItemQuantity
                     errors={errors}
                     register={register}
                  />
               </div>
               <InputPrices
                  errors={errors}
                  register={register}
                  handlePriceChange={handlePriceChange}
                  purchaseprice={purchaseprice}
                  sellingprice={sellingprice}
                  control={control}
               />
               <div className="flex gap-2 w-full">
                  <InputMinimumStock
                     errors={errors}
                     register={register}
                  />
                  <InputMaximumStock
                     errors={errors}
                     register={register}
                  />
               </div>
               <InputSupplier
                  errors={errors}
                  register={register}
               />
               <InputItemDescription
                  errors={errors}
                  register={register}
                  watch={watch}
               />
               <ButtonAddItemStock />
            </fieldset>
         </form>
      </DialogContent>
   );
}
