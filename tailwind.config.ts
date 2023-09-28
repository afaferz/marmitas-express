import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", "Raleway", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#E30613",
                secondary: "#FFED00",
                "black-2th": `#0a0909`,
                white: "#fff",
            },
        },
    },
};
