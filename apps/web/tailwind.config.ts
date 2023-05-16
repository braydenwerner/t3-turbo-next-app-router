import type { Config } from "tailwindcss";

import baseConfig from "@blaze-ai/tailwind-config";

export default {
  content: ["./src/**/*.tsx", "../../packages/ui/**/*.{js,ts,jsx,tsx}"],
  presets: [baseConfig],
} satisfies Config;
