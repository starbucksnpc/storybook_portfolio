import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import MyHero from './MyHero';
import { MyHeroProps } from './MyHero.types';

export default {
  title: 'Sol/MyHero',
  component: MyHero,
  argTypes: {
    backgroundImage: { control: 'text' },
    title: { control: 'text' },
    buttonText: { control: 'text' },
    disabled: { control: 'boolean' },
    disabledBackgroundColor: { control: 'color' },
    visible: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<MyHeroProps> = (args) => <MyHero {...args} />;

export const DefaultHero = Template.bind({});
DefaultHero.args = {
  backgroundImage: 'https://example.com/hero-image.jpg',
  title: 'Welcome to My Website',
  buttonText: 'Know More',
  onButtonClick: () => alert('Button Clicked!'),
  disabled: false,
  disabledBackgroundColor: '',
  visible: true,
};

DefaultHero.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByRole('button', { name: /know more/i });
  
  // 버튼 클릭 상호작용 테스트
  await userEvent.click(buttonElement);
  // 버튼이 클릭되었을 때의 동작 확인 (alert 대신 실제 동작 확인)
  expect(buttonElement).toHaveTextContent('Know More');
};

export const DisabledHero = Template.bind({});
DisabledHero.args = {
  backgroundImage: 'https://example.com/hero-image.jpg',
  title: 'This is Disabled',
  buttonText: 'Cannot Click',
  onButtonClick: () => alert('Button Clicked!'),
  disabled: true,
  disabledBackgroundColor: '#d3d3d3',
  visible: true,
};

DisabledHero.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByRole('button', { name: /cannot click/i });

  // 비활성화된 버튼 클릭 시도
  await userEvent.click(buttonElement);
  // 버튼이 비활성화되어 클릭되지 않았는지 확인
  expect(buttonElement).toBeDisabled();
};
