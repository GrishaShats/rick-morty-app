import { ValueType } from 'react-select/src/types';
export * from './Select';

export type SelectValueType<T = { value: string, label: string }> = ValueType<T>;
