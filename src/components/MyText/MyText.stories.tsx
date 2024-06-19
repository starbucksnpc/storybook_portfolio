import { Meta, StoryFn } from '@storybook/react';
import MyText from './MyText';
import { MyTextProps } from './MyText.types';

export default {
  title: 'Sol/MyText',
  component: MyText,
} as Meta;

const Template: StoryFn<MyTextProps> = (args) => <MyText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello, World!',
};

export const SmallText = Template.bind({});
SmallText.args = {
  text: 'Small Text',
  size: 'small',
};

export const MediumText = Template.bind({});
MediumText.args = {
  text: 'Medium Text',
  size: 'medium',
};

export const LargeText = Template.bind({});
LargeText.args = {
  text: 'Large Text',
  size: 'large',
};

export const BoldText = Template.bind({});
BoldText.args = {
  text: 'Bold Text',
  fontWeight: 'bold',
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  text: 'Disabled Text',
  disabled: true,
};
