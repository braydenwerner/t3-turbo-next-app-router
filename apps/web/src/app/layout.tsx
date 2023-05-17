// Could not figure out how to add tRPC provider without client component
"use client";

import { Toaster } from "@blaze-ai/ui";
import { TailwindIndicator } from "@blaze-ai/ui/src/tailwind-indicator";
import { cn } from "@blaze-ai/utils";

import { api } from "~/utils/api";
import { fontSans } from "~/lib/fonts";
import { AuthSessionProvider } from "~/providers/auth-session-provider";
import { ThemeProvider } from "~/providers/theme-provider";
import "~/styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <AuthSessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </ThemeProvider>
          <TailwindIndicator />
        </AuthSessionProvider>
        <Toaster />
      </body>
    </html>
  );
};
export default api.withTRPC(RootLayout);
