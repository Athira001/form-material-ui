import { Meta, Story } from "@storybook/react/types-6-0";

import CurrencySelect from "./CurrencySelect";

export default {
	title: "Input/CurrencySelect",
	component: CurrencySelect,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
} as Meta;

const Template: Story<any> = (args) => <CurrencySelect {...args} />;

export const Default = Template.bind({});
Default.args = {};
