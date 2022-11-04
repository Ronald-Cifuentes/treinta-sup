import userEvent from '@testing-library/user-event';
import {cleanup, render, screen} from '__tests__/test-utils';
import {Trigger} from './Trigger';

const DTI_TRIGGER_BTN = 'trigger-btn-test';
const DTI_INPUT = 'input-test';

describe('<Trigger/>', () => {
  beforeEach(cleanup);

  test('#1. Exist - Render Correctly', () => {
    render(<Trigger />);
    const trigger = screen.getByTestId('trigger-test');
    expect(trigger).toBeInTheDocument();
  });

  test('#2. Trigger Correctly', () => {
    render(
      <Trigger triggerProp="readOnly">
        <input defaultValue="Test" data-testid={DTI_INPUT} />
      </Trigger>,
    );
    const btnTrigger = screen.getByTestId(DTI_TRIGGER_BTN);
    userEvent.click(btnTrigger);
    const inputField = screen.getByTestId(DTI_INPUT) as HTMLInputElement;
    expect(inputField.readOnly).toBe(false);
  });
});
