export interface UseCheckBulkUpload {
  onValidate: () => string;
  isLoading: boolean;
  isError: boolean;
  data: unknown;
  error: unknown;
  isSuccess: boolean;
}
