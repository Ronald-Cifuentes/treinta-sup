import {ReactNode} from 'react';

import {ProductWithErrors} from 'context/UploadBulkContext';

export interface AlertProps {
  content: ReactNode;
  onClose: () => void;
  dataTestIdCloseButton: string;
}

export interface ProductNameProps {
  product: ProductWithErrors;
  dataTestIdName?: string;
}

export interface ProductDeleteProps {
  deleteProduct: () => void;
  dataTestId: string;
}
