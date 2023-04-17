import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // src: "/src",
            assets: "src/assets",
            components: "src/components",
            hooks: "src/hooks",
            models: "src/models",
            pages: "src/pages",
            routes: "src/routes",
            store: "src/store",
            styles: "src/styles",
            utils: "src/utils"
        },
    },
});
