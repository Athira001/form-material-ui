import { Meta, Story } from "@storybook/react/types-6-0";

import LanguageSelect from "./LanguageSelect";

export default {
  title: "Input/LanguageSelect",
  component: LanguageSelect,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as Meta;

const Template: Story<any> = (args) => <LanguageSelect {...args} />;

export const Default = Template.bind({});
Default.args = {};
