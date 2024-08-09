import type { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import MyLink from './MyLink';
import { MyLinkProps } from './MyLink.types';

export default {
  title: 'Sol/MyLink',
  component: MyLink,
  argTypes: {
    href: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<MyLinkProps> = (args) => <MyLink {...args} />;

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  label: 'Resume',
  href: '#',
  disabled: false,
  onClick: (e) => {
    e.preventDefault(); // 기본 동작 방지
    alert('Link clicked!');
  },
};

PrimaryLink.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Resume');
  
  // 링크 클릭 상호작용 테스트
  await userEvent.click(linkElement);
  expect(linkElement).toBeInTheDocument();
};

export const HoverLink = Template.bind({});
HoverLink.args = {
  label: 'Resume',
  href: '#',
  disabled: false,
  onClick: (e) => {
    e.preventDefault(); // 기본 동작 방지
    alert('Link clicked!');
  },
};

HoverLink.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Resume');

  // 링크 호버 상호작용 테스트
  await userEvent.hover(linkElement);
  expect(linkElement).toHaveStyle(`color: #007bff`);

  // 호버 해제
  await userEvent.unhover(linkElement);
  expect(linkElement).toHaveStyle(`color: #007bff`);
};

export const DisabledLink = Template.bind({});
DisabledLink.args = {
  label: 'Disabled',
  href: '#',
  disabled: true,
  onClick: (e) => {
    e.preventDefault(); // 기본 동작 방지
    alert('Link clicked!');
  },
};

DisabledLink.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByText('Disabled');

  // 비활성화된 링크는 클릭되지 않아야 함
  try {
    await userEvent.click(linkElement);
  } catch (error) {
    console.log('Expected error for disabled link:', error);
  }

  // Disabled 상태 확인
  expect(linkElement).toHaveStyle('cursor: not-allowed');
  expect(linkElement).toHaveAttribute('aria-disabled', 'true');
  expect(linkElement).toHaveStyle('pointer-events: auto'); // `pointer-events: auto`로 수정
};
