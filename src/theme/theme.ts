export interface ThemeProps {
  theme: Theme;
}

export default interface Theme {
  grayColor: string;
  transparentWhiteColor: string;
  redColor: string;
  whiteColor: string;
  blackColor: string;
}

export const theme: Theme = {
  grayColor: 'rgba(0, 0, 0, .125)',
  transparentWhiteColor: 'rgb(255,255,255,0.07)',
  redColor: 'red',
  whiteColor: 'white',
  blackColor: 'black',
};
