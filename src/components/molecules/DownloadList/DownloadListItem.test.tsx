import {PdfIcon} from '@30sas/web-ui-kit-icons';
import {renderTheme, screen} from '__tests__/test-utils';

import {DownloadListItem} from './DownloadListItem';

describe('<DownloadListItem />', () => {
  it('Should render correctly', () => {
    renderTheme(
      <DownloadListItem
        text="test"
        color="red"
        downloadFX={jest.fn()}
        Icon={PdfIcon}
      />,
    );
    expect(screen.getByTestId('download_listItem_option')).toBeInTheDocument();
  });
});
