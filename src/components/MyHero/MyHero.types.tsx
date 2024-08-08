export interface MyHeroProps {
  backgroundImage?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
  disabled?: boolean;
  disabledBackgroundColor?: string;
  visible?: boolean;
}
