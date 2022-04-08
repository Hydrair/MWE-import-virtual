const { VitePWA } = require("vite-plugin-pwa");

module.exports = {
    core: {
        builder: "@storybook/builder-vite",
    },
    stories: ["../src/**/**/*.stories.tsx"],
    addons: ["@storybook/addon-essentials"],
    // staticDirs: ['../public'],
    framework: "@storybook/react",

    async viteFinal(config, { configType }) {
        config.optimizeDeps.include = [
            "react-router-dom",
            "vite",
            "vite-plugin-pwa",
            ...config.optimizeDeps.include,
        ];
        config.optimizeDeps.exclude = ["path", "fs"];
        return config;
    },
};
