import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByRole('button', { name: /know more/i });
  
  // 버튼 클릭 상호작용 테스트
  await userEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('Know More');
};

export const Hover = Template.bind({});
Hover.args = {
  label: 'Know More',
  onClick: () => alert('Button Clicked!'),
  disabled: false,
  style: {},
  backgroundColor: '',
};

Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByRole('button', { name: /know more/i });
  
  // 버튼 호버 상호작용 테스트
  await userEvent.hover(buttonElement);
  // 예시로 backgroundColor가 hover 상태에서 변경된다고 가정
  expect(buttonElement).toHaveStyle({ backgroundColor: 'expected-hover-color' });
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  onClick: () => alert('Button Clicked!'),
  disabled: true,
  style: {},
  backgroundColor: '#d3d3d3',
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByRole('button', { name: /disabled/i });

  // 비활성화된 버튼은 클릭되지 않아야 함
  await userEvent.click(buttonElement);
  expect(buttonElement).toBeDisabled();
};
