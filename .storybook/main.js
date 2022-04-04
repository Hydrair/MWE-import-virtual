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
            "http-proxy-middleware",
            "vite",
            "vite-plugin-pwa",
            "fast-deep-equal",
            ...config.optimizeDeps.include,
        ];
        config.plugins.push(VitePWA({}));
        return config;
    },
};
