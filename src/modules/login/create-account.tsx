import { Button } from "@/_ui/button";

export function CreateAccount() {
  return (
    <div className="flex items-center justify-center gap-2 text-gray-500">
      <p>Não tem uma conta?</p>
      <Button className="!p-0 font-medium cursor-pointer" variant="link">
        Criar conta
      </Button>
    </div>
  );
}
