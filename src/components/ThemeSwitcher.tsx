'use client';

import { useTheme } from '@/components/ThemedHTMLClient';
import { Box } from '../../styled-system/jsx';
import { css, cx } from '../../styled-system/css';
import { icon } from '../../styled-system/recipes';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const iconText = `Switch to ${nextTheme} mode`;

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      aria-label={iconText}
      className={switchStyle}
    >
      <Box className={iconStyle} />
    </button>
  );
};

const switchStyle = css({
  px: '2',
  py: '1',
  textStyle: 'xl',
  fontWeight: 'semibold',
  letterSpacing: 'tight',
  rounded: 'md',
  _hover: {
    bg: 'bg.emphasized.hover',
  },
});

const iconStyle = cx(
  icon({
    name: {
      base: 'game-icons:sunrise',
      _dark: 'game-icons:moon',
    },
  }),
  css({ fontSize: 'xl' })
);
