import Title from "@/components/ui/atoms/title";
import RegisterForm from "@/components/ui/molecules/RegisterForm";

export default function RegisterSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <Title>Créer un compte</Title>

        <p className="text-gray-600 mb-6">
          Rejoins ExplorArt et commence ton voyage culturel.
        </p>

        <RegisterForm />
      </div>
    </section>
  );
}
