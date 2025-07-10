import { Input } from "@/_ui/input";
import { Label } from "@/_ui/label";
import { Mail, User } from "lucide-react";

export function InputFirstName({ register, errors }: any) {
  return (
    <div className="space-y-2 animated-right">
      <Label className="text-gray-500" htmlFor="name">
        Nome
      </Label>
      <div className="relative">
        <User className="absolute top-2.5 left-3 text-gray-400" size="16" />
        <Input
          className="pl-10 text-gray-500 autofill:none"
          id="name"
          type="text"
          placeholder="Digite o seu nome"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="text-xs text-red-500 font-mono">
            {errors.name?.message}
          </p>
        )}
      </div>
    </div>
  );
}
