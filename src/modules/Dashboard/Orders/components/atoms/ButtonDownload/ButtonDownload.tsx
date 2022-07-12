import {FC} from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {ButtonDownloadTypes} from './types';
import {BtnDownloadTemplate} from './ButtonDownload.styled';

export const ButtonDownload: FC<ButtonDownloadTypes> = ({text, onClick}) => (
  <BtnDownloadTemplate onClick={onClick}>
    <FileDownloadIcon />
    {text}
  </BtnDownloadTemplate>
);
