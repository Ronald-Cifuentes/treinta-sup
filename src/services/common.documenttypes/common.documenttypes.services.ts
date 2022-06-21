import {AxiosResponse} from 'axios';

import {ApiProvider} from 'providers/api-provider';
import {DocumentType} from 'services/models/Common';

export class CommonDocumentTypesServices {
  private api: ApiProvider;
  constructor() {
    this.api = ApiProvider.getInstance();
  }

  getDocumentType(): Promise<AxiosResponse<DocumentType[]>> {
    return this.api.get(`/common/documenttypes`);
  }
}
