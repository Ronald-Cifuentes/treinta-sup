import {ColorTypesTag} from '@30sas/web-ui-kit-core';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {StatusDetail} from 'services/models';
import {optionsChangeState} from '../../atoms/ChangeStates/ChangeStates.mock';
import {Tag} from '../../../../../../components/atoms/TagCustom';
import {OrderStatusTags} from '../../organisms/OrderList/OrderList.const';
import {
  StateBarContainer,
  StateBarContent,
  StateBarSpecialSelect,
  StateBarStatusContent,
  StateBarStatusTitle,
} from './StateBar.styled';
import {StateBarProps} from './types';

export const StateBar: FC<StateBarProps> = ({
  status = {} as StatusDetail,
  handleChangeStates,
  dataTestId = 'state-bar-test',
}) => {
  const {t} = useTranslation();

  return (
    <StateBarContainer data-testid={dataTestId}>
      <StateBarContent>
        <StateBarStatusTitle>
          {t('detail-orders.state-bar.title')}
        </StateBarStatusTitle>
        <StateBarStatusContent>
          <Tag
            label={status?.name}
            variant={OrderStatusTags[status.name] as ColorTypesTag}
          />
        </StateBarStatusContent>
        <StateBarSpecialSelect
          onChange={handleChangeStates}
          defaultText={t('orders.changestates.initial-state-dropdown')}
          options={optionsChangeState[status.id]}
        />
      </StateBarContent>
    </StateBarContainer>
  );
};
