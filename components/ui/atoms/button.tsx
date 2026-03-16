"use client";

import { Button as ShadButton } from "@/components/ui/button";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & React.ComponentProps<typeof ShadButton>;

export default function Button({ children, ...props }: ButtonProps) {
  return <ShadButton {...props}>{children}</ShadButton>;
}
