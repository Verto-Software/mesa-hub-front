"use client";

import { Dialog } from "@/_shared/components/ui/dialog";
import { useState } from "react";
import { ButtonOpenDialogAddNewOrder } from "./form/components/button-open-dialog-add-new-order";
import { FormCreateNewOrder } from "./form/form-create-new-order";
import { InputSearchOrder } from "./input-search-order";
import { useOrders } from "@/hooks/useOrders";
import { OrderCardItem } from "./order-card/order-card-item";

export function Order() {
  const [open, setOpen] = useState(false);
  const { data: orders } = useOrders();

  function handleCloseDialog() {
    setOpen(false);
  }

  return (
    <section className="flex flex-col select-none">
      <div className="flex flex-col lg:flex-row items-start gap-3 justify-between sticky top-[77px] w-full p-6 bg-white z-10">
        <div className="flex gap-3 items-center">
          <div className="flex gap-6 flex-col md:flex-row">
            <Dialog
              open={open}
              onOpenChange={setOpen}
            >
              <ButtonOpenDialogAddNewOrder />
              <FormCreateNewOrder handleCloseDialog={handleCloseDialog} />
            </Dialog>
          </div>
          {orders?.length === 0 ? (
            <p className="text-gray-500">Não tem comanda em aberto</p>
          ) : (
            <p className="text-gray-400 text-xs font-medium">
              {orders?.length === 1 ? "Comanda" : "Comandas"} em aberto: {orders?.length}
            </p>
          )}
        </div>
        <InputSearchOrder />
      </div>
      <OrderCardItem />
    </section>
  );
}
