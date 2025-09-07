"use client";

import { ButtonFullScreen } from "./button-full-screen";
import { Separator } from "./separator";
import { SidebarTrigger } from "./sidebar";

export function Header() {
   return (
      <header className="flex items-center gap-4 border-b p-5.5 select-none sticky top-0 bg-white z-10 print:hidden">
         <SidebarTrigger className="cursor-pointer" />
         <Separator orientation="vertical" />
         <h1 className="text-xl font-semibold">Sistema de Gestão</h1>

         <ButtonFullScreen className="cursor-pointer w-8 h-8 ml-auto hidden lg:flex" />
      </header>
   );
}
