import { Button } from "@/_ui/button";
import Link from "next/link";

export function CreateAccount() {
  return (
    <div className="flex items-center justify-center gap-2 text-gray-500">
      <p>Não tem uma conta?</p>
      <Button
        className="!p-0 font-medium cursor-pointer"
        type="button"
        variant="link"
        asChild
      >
        <Link href="#">Criar conta</Link>
      </Button>
    </div>
  );
}
