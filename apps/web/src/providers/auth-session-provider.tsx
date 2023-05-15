"use client";

import { SessionProvider } from "next-auth/react";

export interface AuthSessionProviderProps {
  children: React.ReactNode;
}

export default function AuthSessionProvider({
  children,
}: AuthSessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
