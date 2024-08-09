import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Hello, World!');

  // 텍스트 클릭 상호작용 테스트
  await userEvent.click(textElement);
  expect(textElement).toBeInTheDocument();
};

export const SmallText = Template.bind({});
SmallText.args = {
  text: 'Small Text',
  size: 'small',
};

SmallText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Small Text');
  expect(textElement).toHaveStyle('font-size: 14px');
};

export const MediumText = Template.bind({});
MediumText.args = {
  text: 'Medium Text',
  size: 'medium',
};

MediumText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Medium Text');
  expect(textElement).toHaveStyle('font-size: 18px');
};

export const LargeText = Template.bind({});
LargeText.args = {
  text: 'Large Text',
  size: 'large',
};

LargeText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Large Text');
  expect(textElement).toHaveStyle('font-size: 24px');
};

export const BoldText = Template.bind({});
BoldText.args = {
  text: 'Bold Text',
  fontWeight: 'bold',
};

BoldText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Bold Text');
  expect(textElement).toHaveStyle('font-weight: 700');
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  text: 'Disabled Text',
  disabled: true,
};

DisabledText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Disabled Text');
  expect(textElement).toHaveStyle('color: #aaa');
  expect(textElement).toHaveStyle('cursor: not-allowed');
};
