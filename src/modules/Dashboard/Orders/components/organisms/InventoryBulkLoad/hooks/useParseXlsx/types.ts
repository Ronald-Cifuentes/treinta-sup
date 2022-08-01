import {UploadProduct} from 'services/models';
import {FileRejection} from 'react-dropzone';

export interface ProductFile {
  category: string;
  cost: number;
  isVisible: string;
  name: string;
  notes: string;
  price: number;
  sku: number;
  stock: number;
  key: number;
}

export interface UseParseXlsxOutput {
  onFilesChange: (acceptFiles: File[], fileRejections: FileRejection[]) => void;
  validateDuplicateSkuAndDifferentName: (
    inventoryProducts: UploadProduct[],
    products: UploadProduct[],
  ) => UploadProduct[];
}
