import React from "react";
import { Story } from "@storybook/react";
import { Header } from "./Header";
import { action } from "@storybook/addon-actions";

export default {
    title: "Components/Header",
    component: Header,
    argTypes: {
        middle: { control: "text" },
    },
};

const Template: Story<any> = ({ onclick, ...args }) => (
    <Header onclick={action("clicksss")} {...args} />
);

export const Default = Template.bind({});
