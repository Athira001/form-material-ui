import { Meta, Story } from "@storybook/react/types-6-0";

import SettingsSelector from "./SettingsSelector";

export default {
  title: "Modal/SettingsSelector",
  component: SettingsSelector,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as Meta;

const Template: Story<any> = (args) => <SettingsSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};
