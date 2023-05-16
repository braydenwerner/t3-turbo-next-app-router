// Importing env files here to validate on build
import "./src/env.mjs";
import "@blaze-ai/auth/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@blaze-ai/api",
    "@blaze-ai/auth",
    "@blaze-ai/db",
    "@blaze-ai/utils",
    "@blaze-ai/ui",
  ],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
