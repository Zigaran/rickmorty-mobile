import * as styledComponents from 'styled-components/native';

import { theme, Theme } from './theme';

// prettier-ignore
// @ts-ignore
const { css, ThemeProvider } = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<Theme>;
// @ts-ignore
const styled = styledComponents.default as styledComponents.ReactNativeStyledInterface<Theme>;

export default styled;
// @ts-ignore
export { theme, ThemeProvider, css };
