import { Button } from "@/_ui/button";
import { Separator } from "@radix-ui/react-separator";

export function LoginWithGoogle() {
  return (
    <>
      <div className="flex items-center justify-center gap-2 text-gray-500">
        <div className="w-full border-t border-gray-200" />
        <span className="bg-white text-gray-500 text-nowrap mb-1">
          ou continue com
        </span>
        <div className="w-full border-t border-gray-200" />
      </div>
      <Button className="cursor-pointer" variant="secondary" type="button">
        Google
      </Button>
    </>
  );
}
