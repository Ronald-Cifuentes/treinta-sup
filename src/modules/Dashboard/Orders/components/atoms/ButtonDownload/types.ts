import React from 'react';

export interface ButtonDownloadTypes {
  text?: string | React.FunctionComponent;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
