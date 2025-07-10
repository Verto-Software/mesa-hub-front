"use client";

import { Card, CardContent, CardHeader } from "@/_ui/card";
import { InputEmail } from "./components/input-email";
import { InputPassword } from "./components/input-password";
import { Button } from "@/_ui/button";
import { CreateAccount } from "./components/create-account";
import { LoginWithGoogle } from "./components/login-with-google";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAuthSchema, authSchema } from "./components/schema";
import { useState } from "react";
import { InputFirstName } from "./components/input-first-name";
import { InputLastName } from "./components/input-last-name";

export function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setRegister] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormAuthSchema>({
    resolver: zodResolver(authSchema),
    mode: "all",
  });

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleCreateAccount() {
    setRegister(!isRegister);
    reset();
  }

  function handleSubmitFormLogin(data: FormAuthSchema) {
    console.log("📋 Dados recebidos:", data);
    reset();
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-fade-in">
          <CardHeader>
            <p className="text-center text-2xl font-medium text-gray-500">
              {isRegister ? "Criar conta" : "Bem-vindo de volta!"}
            </p>
          </CardHeader>
          <CardContent>
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(handleSubmitFormLogin)}
            >
              {isRegister ? (
                <>
                  <InputFirstName register={register} errors={errors} />
                  <InputLastName register={register} errors={errors} />
                </>
              ) : null}
              <InputEmail register={register} errors={errors} />
              <InputPassword
                register={register}
                errors={errors}
                showPassword={showPassword}
                toggleShowPassword={toggleShowPassword}
                isRegister={isRegister}
              />
              <Button
                className="cursor-pointer"
                type="submit"
                disabled={!isValid}
              >
                {isRegister ? "Criar conta" : "Entrar"}
              </Button>
              <CreateAccount
                handleCreateAccount={handleCreateAccount}
                isRegister={isRegister}
              />
              <LoginWithGoogle />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
