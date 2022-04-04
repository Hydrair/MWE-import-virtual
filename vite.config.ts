const path = require("path");
const { defineConfig } = require("vite");
import dts from "vite-plugin-dts";

module.exports = defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true,
            logDiagnostics: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "mwe",
            formats: ["es"],
            fileName: "mwe",
        },
        sourcemap: true,
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["react", "react-dom", "virtual:pwa-register/react"],
        },
    },
    optimizeDeps: {},
});
