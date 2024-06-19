import { Meta, StoryFn } from '@storybook/react';
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
  buttonText: 'Learn More',
  onButtonClick: () => alert('Button Clicked!'),
  disabled: false,
  disabledBackgroundColor: '',
  visible: true,
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
