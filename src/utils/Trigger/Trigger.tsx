import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  useEffect,
  useState,
} from 'react';
import {TriggerProps} from './types';

export const Trigger: FC<TriggerProps> = ({
  children,
  triggerProp,
  dataTestId = 'trigger-test',
  dataTestIdBtn = 'trigger-btn-test',
}) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (trigger) {
      setTrigger(false);
    }
  }, [trigger]);

  const triggerhandle = (): void => {
    setTrigger(true);
  };

  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child as React.ReactElement<typeof triggerProp>, {
        [triggerProp]: trigger,
      });
    }
    return child;
  });

  return (
    <div data-testid={dataTestId}>
      {childrenWithProps}
      <button data-testid={dataTestIdBtn} onClick={triggerhandle}>
        Reset
      </button>
    </div>
  );
};
