import { Meta, Story } from "@storybook/react/types-6-0";

import CountrySelect from "./CountrySelect";

export default {
  title: "Input/CountrySelect",
  component: CountrySelect,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as Meta;

const Template: Story<any> = (args) => <CountrySelect {...args} />;

export const Default = Template.bind({});
Default.args = {};
