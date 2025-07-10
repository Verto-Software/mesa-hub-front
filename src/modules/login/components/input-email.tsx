import { Input } from "@/_ui/input";
import { Label } from "@/_ui/label";
import { Mail } from "lucide-react";

export function InputEmail({ register, errors }: any) {
  return (
    <div className="space-y-2">
      <Label className="text-gray-500" htmlFor="email">
        Email
      </Label>
      <div className="relative">
        <Mail className="absolute top-2.5 left-3 text-gray-400" size="16" />
        <Input
          className="pl-10 text-gray-500 autofill:none"
          id="email"
          type="email"
          placeholder="Digite o seu e-mail"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="text-xs text-red-500 font-mono">
            {errors.email?.message}
          </p>
        )}
      </div>
    </div>
  );
}
