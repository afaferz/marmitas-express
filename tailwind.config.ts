import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#121212",
        secondary: "#82BC34",
        "black-2th": `#0a0909`,
        white: "#f8fafc",
      },
    },
  },
};
