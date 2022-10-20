import {render, screen, cleanup} from '__tests__/test-utils';
import userEvent from '@testing-library/user-event';
import {SpecialSelect} from './SpecialSelect';
import {dataMockSelect} from './SpecialSelect.mock';

describe('<SpecialSelect/>', () => {
  afterEach(cleanup);
  // UI TESTING
  test('#1. Exist', () => {
    render(<SpecialSelect />);
    const specialSelect = screen.getByTestId('special-select');
    expect(specialSelect).toBeInTheDocument();
  });

  test('#2. should correctly set default option', () => {
    const DEFAULT_SELECTED = 'item 2';
    render(
      <SpecialSelect
        defaultSelected={DEFAULT_SELECTED}
        options={dataMockSelect}
      />,
    );
    const specialSelect = screen.getByRole('option', {
      name: DEFAULT_SELECTED,
    }) as HTMLOptionElement;
    expect(specialSelect.selected).toBe(true);
  });

  test('#3. should correctly set default and disable option', () => {
    const DEFAULT_TEXT = 'Test Default And Disabled';
    render(
      <SpecialSelect defaultText={DEFAULT_TEXT} options={dataMockSelect} />,
    );
    const specialSelect = screen.getByRole('option', {
      name: DEFAULT_TEXT,
    }) as HTMLOptionElement;
    expect(specialSelect.disabled).toBe(true);
    expect(specialSelect.selected).toBe(true);
  });

  test('#4. should display the correct number of options', () => {
    const DEFAULT_SELECTED = 'item 2';
    render(
      <SpecialSelect
        defaultSelected={DEFAULT_SELECTED}
        options={dataMockSelect}
      />,
    );
    const specialSelectDS = screen.getAllByRole('option');
    expect(specialSelectDS.length).toBe(5);

    cleanup();

    const DEFAULT_TEXT = 'Test Default And Disabled';
    render(
      <SpecialSelect defaultText={DEFAULT_TEXT} options={dataMockSelect} />,
    );
    const specialSelectDT = screen.getAllByRole('option');
    expect(specialSelectDT.length).toBe(6);
  });

  test('#5. should allow user to change option', () => {
    const DEFAULT_TEXT = 'Test Default And Disabled';
    render(
      <SpecialSelect defaultText={DEFAULT_TEXT} options={dataMockSelect} />,
    );

    expect(
      (
        screen.getByRole('option', {
          name: DEFAULT_TEXT,
        }) as HTMLOptionElement
      ).selected,
    ).toBe(true);

    userEvent.selectOptions(screen.getByRole('combobox'), ['3']);
    expect(
      (
        screen.getByRole('option', {
          name: 'item 3',
        }) as HTMLOptionElement
      ).selected,
    ).toBe(true);

    userEvent.selectOptions(screen.getByRole('combobox'), ['1']);
    expect(
      (
        screen.getByRole('option', {
          name: 'item 1',
        }) as HTMLOptionElement
      ).selected,
    ).toBe(true);
  });
});
