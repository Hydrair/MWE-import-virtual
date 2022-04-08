const VitePWA = require("vite-plugin-pwa").VitePWA;
const { dirname } = require("path");

module.exports = {
    core: {
        builder: "@storybook/builder-vite",
    },
    stories: ["../src/**/**/*.stories.tsx"],
    addons: ["@storybook/addon-essentials"],
    framework: "@storybook/react",
    async viteFinal(config, { configType }) {
        config.optimizeDeps.include = [
            "react-router-dom",
            "vite",
            "vite-plugin-pwa",
            ...config.optimizeDeps.include,
        ];
        config.optimizeDeps.exclude = ["path", "fs"];
        config.plugins = config.plugins ?? [];
        config.plugins.push(
            VitePWA({
                root: dirname(__dirname),
            })
        );
        return config;
    },
};
