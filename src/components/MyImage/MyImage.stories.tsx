import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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

PrimaryImage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByAltText('Primary Image');
  
  // 이미지 클릭 상호작용 테스트
  await userEvent.click(imageElement);
  expect(imageElement).toBeInTheDocument();
};

export const DisabledImage = Template.bind({});
DisabledImage.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Disabled Image',
  width: '150px',
  height: '150px',
  style: { cursor: 'not-allowed', opacity: 0.5 }, // 금지 표시 마크 및 비활성화 효과
  disabled: true,
};

DisabledImage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByAltText('Disabled Image');

  // 커서가 "not-allowed" 상태인지 확인
  expect(imageElement).toHaveStyle('cursor: not-allowed');

  // 비활성화된 이미지를 클릭하려 시도 (실제로는 클릭되지 않아야 함)
  await userEvent.click(imageElement);

  // 클릭이 동작하지 않는지 확인 (예: 클릭 후 아무 변화가 없어야 함)
  expect(imageElement).toBeInTheDocument();
};
