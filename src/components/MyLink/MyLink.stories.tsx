import type { Meta, StoryFn } from '@storybook/react';
import MyLink from './MyLink';
import { MyLinkProps } from './MyLink.types';

export default {
  title: 'Sol/MyLink',
  component: MyLink,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    hoverColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<MyLinkProps> = (args) => <MyLink {...args} />;

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  label: 'Resume',
  disabled: false,
  style: {},
  backgroundColor: '',
  color: '',
  hoverColor: '',
};

export const HoverLink = Template.bind({});
HoverLink.args = {
  label: 'Resume',
  disabled: false,
  style: {},
  backgroundColor: '',
  color: '',
  hoverColor: '#0056b3',
};

export const DisabledLink = Template.bind({});
DisabledLink.args = {
  label: 'Disabled',
  disabled: true,
  style: {},
  backgroundColor: '#d3d3d3',
  color: '',
  hoverColor: '',
};