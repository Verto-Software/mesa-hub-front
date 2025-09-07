"use client";

import { DialogContent, DialogHeader, DialogTitle } from "@/_shared/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { TFormOrder } from "../interface";
import { ButtonCreateOrder } from "./components/button-create-order";
import { InputOrderDescription } from "./components/input-order-description";
import { InputOrderName } from "./components/input-order-name";
import { OrderNumber } from "./components/input-order-number";
import { FormOrderSchema, OrderSchema } from "./schema";
import { useCreateOrder } from "@/hooks/useOrders";
import { toast } from "sonner";

export function FormCreateNewOrder({ handleCloseDialog }: TFormOrder) {
  const t = useTranslations();
  const { mutate: createOrder, isPending } = useCreateOrder();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormOrderSchema>({
    resolver: zodResolver(OrderSchema()),
    mode: "onBlur",
  });

  function handleSubmitNewOrder(data: FormOrderSchema) {
    createOrder(
      {
        number: Number(data.number),
        name: data.name ?? "",
        description: data.description ?? "",
      },
      {
        onSuccess: () => {
          reset();
          handleCloseDialog();
        },
        onError: () => {
          toast.error(`Essa comanda já existe em aberto!`);
        },
      }
    );
  }

  return (
    <DialogContent className="select-none">
      <form onSubmit={handleSubmit(handleSubmitNewOrder)}>
        <fieldset className="space-y-5">
          <DialogHeader>
            <DialogTitle>
              <legend>{t("AddNewOrder")}</legend>
            </DialogTitle>
          </DialogHeader>
          <div className="flex gap-2 flex-col md:flex-row w-full">
            <OrderNumber
              register={register}
              errors={errors}
            />
            <InputOrderName
              register={register}
              errors={errors}
            />
          </div>
          <InputOrderDescription
            register={register}
            errors={errors}
            watch={watch}
          />
          <ButtonCreateOrder
            reset={reset}
            isPending={isPending}
          />
        </fieldset>
      </form>
    </DialogContent>
  );
}
