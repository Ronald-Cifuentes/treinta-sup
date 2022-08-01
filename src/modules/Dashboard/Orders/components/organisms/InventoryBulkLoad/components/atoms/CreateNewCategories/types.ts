export interface CreateNewCategoriesProps {
  openModal: boolean;
  onCloseModal: () => void;
  onConfirm: (categories: string[]) => void;
  title: string;
  subtitle: string;
  newCategories: string[];
}
