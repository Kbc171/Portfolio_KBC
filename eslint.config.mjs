import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "node_modules/**", "Parker_files/**", "Parker.html"],
  },
  ...nextVitals,
];

export default config;
