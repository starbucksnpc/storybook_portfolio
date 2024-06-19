import { Meta, StoryFn } from '@storybook/react';
import MyButton from './MyButton';
import { MyButtonProps } from './MyButton.types';

export default {
    title: 'Sol/MyButton',
    component: MyButton,
    argTypes: {
      label: { control: 'text' },
      backgroundColor: { control: 'color' },
      disabled: { control: 'boolean' },
      style: { control: 'object' },
      onClick: { action: 'clicked' },
    },
  } as Meta;
  
  const Template: StoryFn<MyButtonProps> = (args) => <MyButton {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    label: 'Know More',
    onClick: () => alert('Button Clicked!'),
    disabled: false,
    style: {},
    backgroundColor: '',
  };

  export const Hover = Template.bind({});
Hover.args = {
    label: 'Know More',
    onClick: () => alert('Button Clicked!'),
    disabled: false,
    style: {},
    backgroundColor: '',
};
  
  export const Disabled = Template.bind({});
  Disabled.args = {
    label: 'Disabled',
    onClick: () => alert('Button Clicked!'),
    disabled: true,
    style: {},
    backgroundColor: '#d3d3d3',
  };