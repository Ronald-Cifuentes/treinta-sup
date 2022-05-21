import {To, NavigateOptions} from 'react-router-dom';

export interface UseNavigateI18n {
  (to: To, options?: NavigateOptions): void;
}
