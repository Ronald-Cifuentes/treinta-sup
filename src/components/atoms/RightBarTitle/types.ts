export interface RightBarTitleProps {
  title: string;
  onBeforeExit?: (exit: () => void) => void;
  dataTestIdCloseButton?: string;
  dataTestIdBackButton?: string;
}
