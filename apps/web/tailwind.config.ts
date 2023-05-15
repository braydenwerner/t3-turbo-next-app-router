import type { Config } from "tailwindcss";

import baseConfig from "@blaze-ai/tailwind-config";

export default {
  content: ["./src/**/*.tsx"],
  presets: [baseConfig],
} satisfies Config;
