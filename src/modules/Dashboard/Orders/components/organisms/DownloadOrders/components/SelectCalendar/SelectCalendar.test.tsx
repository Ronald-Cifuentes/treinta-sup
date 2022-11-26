import {renderTheme, screen} from '__tests__/test-utils';
import {SelectCalendar} from './SelectCalendar';

describe('<SelectCalendar/>', () => {
  // UI TESTING
  test('#1. Render SelectCalendar', () => {
    renderTheme(<SelectCalendar />);
    expect(screen.getByTestId('calendar_test')).toBeInTheDocument();
  });
});
