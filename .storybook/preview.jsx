import React from "react";
import "../src/index.scss";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

// registerSW();
addDecorator((story) => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

const customViewports = {
    mobile: {
        name: "iPhone XR",
        styles: {
            width: "414px",
            height: "896px",
        },
    },
    tablet: {
        name: "iPad Mini",
        styles: {
            width: "768px",
            height: "1024px",
        },
    },
    tabletBig: {
        name: "iPad Air",
        styles: {
            width: "820px",
            height: "1180px",
        },
    },
};
export const parameters = {
    layout: "fullscreen",
    viewport: { viewports: customViewports },
};
