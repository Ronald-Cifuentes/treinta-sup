import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '@30sas/web-ui-kit-core';
import {TableMui} from 'modules/Dashboard/Orders/components/atoms/TableMui';

import {SectionTableInventoryDetailProps} from './types';
import {
  CtrlSection,
  InputBox,
  Label,
  SectionTableContainer,
  WrapperBtnReturn,
} from './SectionTableInventoryDetail.styled';
import {columns} from './SectionTableInventoryDetail.config';

const HandleBtnsCtrl: FC = () => {
  const history = useNavigate();

  const handleBtnReturn = (): void => {
    history({pathname: '/inventario'});
  };
  return (
    <WrapperBtnReturn>
      <Button
        borderColor="secondary"
        borderColorType="700"
        color="neutrals"
        colorType="100"
        hoverColor="secondary"
        hoverColorType="100"
        label="Volver"
        rounded="xl"
        size="medium"
        textColor="secondary"
        textColorType="700"
        textVariant="Smallbold"
        variant="secondary"
        onClick={() => handleBtnReturn()}
      />
    </WrapperBtnReturn>
  );
};

export const SectionTableInventoryDetail: FC<
  SectionTableInventoryDetailProps
> = ({data, description}) => (
  <SectionTableContainer data-testid="section-table">
    <TableMui
      checkboxSelection={false}
      columns={columns}
      formattedData={data}
    />
    <Label>
      Descripción:
      <InputBox value={description} />
    </Label>
    <CtrlSection>
      <HandleBtnsCtrl />
    </CtrlSection>
  </SectionTableContainer>
);
