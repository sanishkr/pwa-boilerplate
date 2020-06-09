import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from './../tailwind.config.js';
import GlobalStyles from './GlobalStyles';

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from '../config/colors.config';

const { theme } = resolveConfig(tailwindConfig);

const AppTheme = props => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);
  const router = useRouter();
  React.useEffect(() => {
    const root = window.document.documentElement;
    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP,
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;
        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren',
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeContext.Provider value={contextValue} {...{ theme }}>
        <GlobalStyles />
        <motion.div
          transition={spring}
          key={router.pathname}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          id="page-transition-container"
        >
          {props.children}
        </motion.div>
      </ThemeContext.Provider>
    </AnimatePresence>
  );
};

export default AppTheme;
