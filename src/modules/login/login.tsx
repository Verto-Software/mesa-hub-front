import { Card, CardHeader } from "@/_ui/card";
import { InputLogin } from "./input-login";
import { InputPassword } from "./input-password";
import { Button } from "@/_ui/button";
import { CreateAccount } from "./create-account";
import { LoginWithGoogle } from "./login-with-google";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLoginSchema, loginSchema } from "./schema";

export function Login() {
  const { register, handleSubmit } = useForm<FormLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  function handleFormLogin(data: FormLoginSchema) {
    console.log("Login realizado com sucesso", data);
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-fade-in px-6">
          <CardHeader className="text-center text-xl text-gray-500">
            Entre na sua conta
          </CardHeader>
          <form onClick={handleSubmit(handleFormLogin)}>
            <InputLogin register={register} />
            <InputPassword register={register} />
            <Button className="cursor-pointer" type="submit">
              Entrar
            </Button>
            <CreateAccount />
            <LoginWithGoogle />
          </form>
        </Card>
      </div>
    </section>
  );
}
