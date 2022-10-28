import {render, screen} from '__tests__/test-utils';
import {Faq} from './Faq';

describe('<FaqTest/>', () => {
  // UI TESTING
  test('#1. Render Faq', () => {
    render(<Faq />);
    expect(screen.getByTestId('faq_test')).toBeInTheDocument();
  });
});
