import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '@30sas/web-ui-kit-core';
import {TableMui} from 'modules/Dashboard/Orders/components/atoms/TableMui';
import {columns} from '../../../Detail.mock';
import {SectionTableProps} from './types';
import {
  CtrlSection,
  SectionTableContainer,
  WrapperBtnReturn,
} from './SectionTable.styled';

const HandleBtnsCtrl: FC = () => {
  const history = useNavigate();

  const handleBtnReturn = (): void => {
    history({pathname: '/ordenes'});
  };
  const handleBtnUpdate = (): void => {
    alert('Pendiente de programar');
  };
  return (
    <>
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
      <Button
        color="success"
        colorType="600"
        hoverColor="success"
        hoverColorType="500"
        label="Actualizar"
        rounded="xl"
        size="medium"
        textColor="success"
        textColorType="100"
        textVariant="Mediumbold"
        onClick={handleBtnUpdate}
      />
    </>
  );
};

export const SectionTable: FC<SectionTableProps> = ({data}) => (
  <SectionTableContainer data-testid="section-table">
    <TableMui
      checkboxSelection={false}
      columns={columns}
      formattedData={data}
    />
    <CtrlSection>
      <HandleBtnsCtrl />
    </CtrlSection>
  </SectionTableContainer>
);
