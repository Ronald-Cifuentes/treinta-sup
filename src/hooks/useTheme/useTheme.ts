import {Theme} from '@30sas/web-ui-kit-theme';
import {useTheme as useStyledTheme} from 'styled-components';

export const useTheme = (): Theme => useStyledTheme() as Theme;
