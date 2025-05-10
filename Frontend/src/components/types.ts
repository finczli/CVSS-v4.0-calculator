export type VectorButtonsType = {
  name: string;
  buttons: { label: string; value: string }[];
};

export type VectorCategoryType = {
  categoryName: string;
  buttons: VectorButtonsType[];
};
