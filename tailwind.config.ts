import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
    // content: [
    //     "./components/**/*.{js,vue,ts}",
    //     "./layouts/**/*.vue",
    //     "./pages/**/*.vue",
    //     "./plugins/**/*.{js,ts}",
    //     "./nuxt.config.{js,ts}",
    //     "./app.vue",
    //     "./node_modules/tw-elements/dist/js/**/*.js"
    // ],
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
    plugins: [require("tw-elements/dist/plugin.cjs")]
};
