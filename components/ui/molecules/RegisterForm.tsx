import Input from "@/components/ui/atoms/input";
import Button from "@/components/ui/atoms/button";
import { registerUser } from "@/app/register/actions";

export default function RegisterForm() {
  return (
    <form action={registerUser} className="flex flex-col gap-6 w-full max-w-sm">
      <Input label="Nom d'utilisateur" name="username" type="text" />
      <Input label="Email" name="email" type="email" />
      <Input label="Mot de passe" name="password" type="password" />

      <Button type="submit" className="w-full">
        Créer mon compte
      </Button>
    </form>
  );
}