import {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {DeliversTable} from '../DeliversTable';
import {Container, Table, Title} from './Delivers.styled';

import {DeliversProps} from './types';

export const Delivers: FC<DeliversProps> = ({date}) => {
  const {t} = useTranslation();

  return (
    <Container data-testid="delivers_test">
      <Title>{t('download_orders.select_batch')}</Title>
      <Table>
        <DeliversTable date={date} />
      </Table>
    </Container>
  );
};
