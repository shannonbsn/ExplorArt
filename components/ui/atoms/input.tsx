"use client";

import { Input as ShadInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  label: string;
  name: string;
  type: string;
};

export default function Input({ label, name, type }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <ShadInput id={name} name={name} type={type} required />
    </div>
  );
}
