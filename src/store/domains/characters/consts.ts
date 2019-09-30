export enum FilterOptionConsts {
  TYPE_PROP = 'select',
  VALUE_PROP = 'input',
}

export enum FilterSelectOption {
  NAME = 'name',
  STATUS = 'status',
  SPECIES = 'species',
}

export const filterSelectOptions = [
  { value: FilterSelectOption.NAME, label: FilterSelectOption.NAME },
  { value: FilterSelectOption.STATUS, label: FilterSelectOption.STATUS },
  { value: FilterSelectOption.SPECIES, label: FilterSelectOption.SPECIES },
];
