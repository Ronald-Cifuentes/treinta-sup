import {Screens} from 'config/constants';

export type ParamsTypes = {
  actions?: (
    | ((params?: Record<string, unknown>) => void)
    | ((params?: Record<string, unknown>) => Promise<void>)
  )[];
  deleteConfirmType?: 'category' | 'transaction' | 'product' | string;
  removePadding?: boolean;
  barCodeScan?: string;
  isEditing?: boolean;
  isActionButton?: boolean;
  isClientRightBar?: boolean;
  borderBox?: boolean;
};

export type DashboardContextType = {
  rightBarOpen: boolean;
  setRightBarOpen: (value: boolean) => void;
  setLoadingReportFileDownload: (value: boolean) => void;
  isLoadingReportFile: boolean;
  loading: boolean;
  params: ParamsTypes;
  setSearch: (search: string) => void;
  setParams: (params: Partial<ParamsTypes>) => void;
  search: string | undefined;
  filters: Record<string, unknown>;
  setFilters: (filters: Record<string, unknown>) => void;
  screens: Screens[];
  rightBarNavigation: {
    navigate: (route: Screens, params?: ParamsTypes) => void;
    goBack: (params?: Partial<ParamsTypes>) => void;
    canGoBack: () => boolean;
  };
  dispatch: React.Dispatch<Action>;
};

export interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export interface State {
  rightBarOpen: boolean;
  search: string;
  screens: Screens[];
  filters: Record<string, unknown>;
  params: ParamsTypes;
  isUpdateNeeded: boolean;
  isLoadingReportFile: boolean;
}
