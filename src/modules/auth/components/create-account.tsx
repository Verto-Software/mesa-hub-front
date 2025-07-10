import { Button } from "@/_ui/button";
import Link from "next/link";

interface TCreateAccount {
  handleCreateAccount: () => void;
  isRegister: any;
}

export function CreateAccount({
  handleCreateAccount,
  isRegister,
}: TCreateAccount) {
  return (
    <div className="flex items-center justify-center gap-2 text-gray-500">
      <p>{isRegister ? "Já possui uma conta?" : "Não tem uma conta?"}</p>
      <Button
        className="!p-0 font-medium cursor-pointer"
        type="button"
        variant="link"
        asChild
        onClick={handleCreateAccount}
      >
        <Link href="#">{isRegister ? "Login" : "Criar conta"}</Link>
      </Button>
    </div>
  );
}
