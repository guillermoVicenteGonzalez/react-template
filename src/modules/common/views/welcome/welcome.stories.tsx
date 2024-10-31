import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeView } from "./welcome.view";

const meta: Meta<typeof WelcomeView> = {
	title: "WelcomeView",
	component: WelcomeView,
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {
	args: {},
};
