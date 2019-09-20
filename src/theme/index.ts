import * as styledComponents from 'styled-components';

import { sizes } from './media';
// import { media, sizes } from './media';
import Theme, { theme } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export * from './theme';
export { css, createGlobalStyle, keyframes, ThemeProvider, theme, styled, sizes };
// export { css, createGlobalStyle, keyframes, ThemeProvider, theme, styled, media, sizes };
