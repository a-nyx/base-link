import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  theme: {},
  daisyui: { themes: ["light"] },
};

export default tailwindConfig;
