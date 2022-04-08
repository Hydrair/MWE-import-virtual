import React from "react";
import { Story } from "@storybook/react";
import { ReloadPrompt } from "./ReloadPrompt";
import { action } from "@storybook/addon-actions";

export default {
    title: "Components/ReloadPrompt",
    component: ReloadPrompt,
    argTypes: {
        middle: { control: "text" },
    },
};

const Template: Story<any> = ({ onclick, ...args }) => (
    <ReloadPrompt onclick={action("clicksss")} {...args} />
);

export const Default = Template.bind({});
