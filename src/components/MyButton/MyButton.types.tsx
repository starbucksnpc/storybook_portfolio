export interface MyButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    backgroundColor?: string;
  }