import { getBreakpointsRange } from './media';

export interface ThemeProps {
  theme: Theme;
}

export default interface Theme {
  breakpoints: Array<string>;

  grayColor: string;
  transparentWhiteColor: string;
  redColor: string;
  whiteColor: string;
  blackColor: string;
}

export const theme: Theme = {

  breakpoints: getBreakpointsRange(400, 1500),

  grayColor: 'rgba(0, 0, 0, .125)',
  transparentWhiteColor: 'rgb(255,255,255,0.07)',
  redColor: 'red',
  whiteColor: 'white',
  blackColor: 'black',
};
