import React from 'react';

import 'react-native-gesture-handler';
import {Navigation} from './presentation/navigator/Navigation';
import {ThemeProvider} from './presentation/context/ThemeContext';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};
