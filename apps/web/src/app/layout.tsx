// Could not figure out how to add tRPC provider without client component
"use client";

import AuthSessionProvider from "~/providers/auth-session-provider";
import { api } from "~/utils/api";
import "~/styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head></head>
      <body>
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  );
};
export default api.withTRPC(RootLayout);
