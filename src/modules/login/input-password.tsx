"use client";

import { Button } from "@/_ui/button";
import { Input } from "@/_ui/input";
import { Label } from "@/_ui/label";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export function InputPassword({
  register,
  showPassword,
  toggleShowPassword,
}: any) {
  return (
    <div className="space-y-2">
      <Label className="text-gray-500" htmlFor="password">
        Senha
      </Label>
      <div className="relative">
        <Lock className="absolute top-2.5 left-3 text-gray-400" size="16" />
        <Input
          className="pl-10 text-gray-500"
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Digite a sua senha"
          {...register("password")}
        />
        <Button
          className="absolute top-0 right-0 text-gray-400 cursor-pointer"
          variant="ghost"
          type="button"
          onClick={toggleShowPassword}
        >
          {showPassword ? <EyeOff size="20" /> : <Eye size="20" />}
        </Button>
      </div>
      <div className="text-right">
        <Button className="!p-0 cursor-pointer" variant="link">
          Esqueceu a senha?
        </Button>
      </div>
    </div>
  );
}
