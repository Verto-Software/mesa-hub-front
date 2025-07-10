import { Input } from "@/_ui/input";
import { Label } from "@/_ui/label";
import { User } from "lucide-react";
import { TInputLastName } from "./interface";

export function InputLastName({ register, errors }: TInputLastName) {
  return (
    <div className="space-y-2 animated-right">
      <Label className="text-gray-500" htmlFor="lastname">
        Sobrenome
      </Label>
      <div className="relative">
        <User className="absolute top-2.5 left-3 text-gray-400" size="16" />
        <Input
          className="pl-10 text-gray-500 autofill:none"
          id="lastname"
          type="text"
          placeholder="Digite o seu sobrenome"
          {...register("lastname")}
        />
        {errors.lastname?.message && (
          <p className="text-xs text-red-500 font-mono">
            {errors.lastname?.message}
          </p>
        )}
      </div>
    </div>
  );
}
