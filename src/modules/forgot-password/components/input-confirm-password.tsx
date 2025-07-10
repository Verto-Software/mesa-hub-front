import { Button } from "@/_ui/button";
import { Input } from "@/_ui/input";
import { Label } from "@/_ui/label";
import { Eye, EyeOff, Lock } from "lucide-react";

export function InputConfirmNewPassword({
  toggleShowConfirmPassword,
  showConfirmPassword,
  register,
  errors,
}: any) {
  return (
    <div className="space-y-2">
      <Label className="text-gray-500" htmlFor="confirmpassword">
        Confirme a senha
      </Label>
      <div className="relative">
        <Lock className="absolute top-2.5 left-3 text-gray-400" size="16" />
        <Input
          className="pl-10 text-gray-500"
          id="confirmpassword"
          type={showConfirmPassword ? "password" : "text"}
          placeholder="Confirme a nova senha"
          {...register("confirmpassword")}
        />
        {errors.confirmpassword?.message && (
          <p className="text-xs text-red-500 font-mono">
            {errors.confirmpassword?.message}
          </p>
        )}
        <Button
          className="absolute top-0 right-0 text-gray-400 cursor-pointer hover:bg-transparent"
          variant="ghost"
          type="button"
          onClick={toggleShowConfirmPassword}
        >
          {showConfirmPassword ? <EyeOff size="20" /> : <Eye size="20" />}
        </Button>
      </div>
    </div>
  );
}
