import {renderTheme, screen} from '__tests__/test-utils';

import {HoverContainer} from './DownloadListItem.styled';

describe('<HoverContainer />', () => {
  it('Should render correctly', () => {
    renderTheme(<HoverContainer disabled={false} />);
    expect(screen.queryAllByTestId('web-div-downloadListItem')).toBeDefined();
  });
});
