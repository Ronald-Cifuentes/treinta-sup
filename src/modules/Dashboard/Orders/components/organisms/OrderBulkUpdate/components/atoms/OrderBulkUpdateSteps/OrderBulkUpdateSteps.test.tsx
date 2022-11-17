import {renderTheme, screen} from '__tests__/test-utils';
import {OrderBulkUpdateSteps} from './OrderBulkUpdateSteps';

describe('<OrderBulkUpdateSteps/>', () => {
  test('#1. Exist - Render correctly', () => {
    renderTheme(<OrderBulkUpdateSteps />);
    const orderBulkUpdateSteps = screen.getByTestId('steps-order-bulk-update');
    expect(orderBulkUpdateSteps).toBeInTheDocument();
  });
});
