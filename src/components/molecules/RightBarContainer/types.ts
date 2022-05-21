export interface RightBarContainerProps {
  title: string;
  dataTestId?: string;
  dataTestIdBackButton?: string;
  dataTestIdCloseButton?: string;
  onBeforeExit?: (exit: () => void) => void;
  children?: React.ReactNode;
}
