import { getBreakpointsRange } from './media';

export interface ThemeProps {
  theme: Theme;
}

export default interface Theme {
  grayColor: string;
}

export const theme: Theme = {
  grayColor: 'rgba(0, 0, 0, .125)',
};
