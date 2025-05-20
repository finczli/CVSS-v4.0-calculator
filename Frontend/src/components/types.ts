export type VectorButtonsType = {
  name: string;
  vector: string;
  buttons: { label: string; value: string, description: string }[];
};

export type VectorCategoryType = {
  categoryName: string;
  displayCategoryName?: boolean;
  buttons: VectorButtonsType[];
};

export type ModelMapType = {
  [key: string]: string;
};
