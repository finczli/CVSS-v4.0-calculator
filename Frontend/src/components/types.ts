export type VectorButtonsType = {
  name: string;
  vector: string;
  buttons: { label: string; value: string }[];
};

export type VectorCategoryType = {
  categoryName: string;
  buttons: VectorButtonsType[];
};

export type ModelMapType = {
  [key: string]: string;
};
