import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow empty types
      "@typescript-eslint/no-empty-object-type": "off", // Disables rule for empty types

      // Optionally, disable empty interface rule as well
      "@typescript-eslint/no-empty-interface": "off", // Disables rule for empty interfaces
    },
  },
];

export default eslintConfig;
