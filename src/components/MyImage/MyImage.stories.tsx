import { Meta, StoryFn } from '@storybook/react';
import MyImage from './MyImage';
import { MyImageProps } from './MyImage.types';

export default {
  title: 'Sol/MyImage',
  component: MyImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    style: { control: 'object' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<MyImageProps> = (args) => <MyImage {...args} />;

export const PrimaryImage = Template.bind({});
PrimaryImage.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Primary Image',
  width: '150px',
  height: '150px',
  style: {},
  disabled: false,
};

export const DisabledImage = Template.bind({});
DisabledImage.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Disabled Image',
  width: '150px',
  height: '150px',
  style: {},
  disabled: true,
};
