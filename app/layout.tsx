import Navbar from "@/components/ui/molecules/navbar";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import RegisterPwa from "@/components/ui/atoms/registerPwa";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn("font-sans", geist.variable)}>
      <body>
        <RegisterPwa />
        <Navbar />
        {children}
      </body>
    </html>
  );
}