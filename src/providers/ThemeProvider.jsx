import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ThemeContext = createContext();

const { LightTheme: NavigationLightTheme, DarkTheme: NavigationAdaptedDarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedLightTheme = {
  ...MD3LightTheme,
  ...NavigationLightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...NavigationLightTheme.colors,
  },
};

const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...NavigationAdaptedDarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...NavigationAdaptedDarkTheme.colors,
  },
};

export function AppThemeProvider({ children }) {
  const systemColorScheme = useColorScheme();
  const [themePreference, setThemePreference] = useState('system');

  const isDark = useMemo(() => {
    if (themePreference === 'system') {
      return systemColorScheme === 'dark';
    }

    return themePreference === 'dark';
  }, [systemColorScheme, themePreference]);

  const toggleTheme = useCallback(() => {
    setThemePreference((current) => {
      const currentlyDark = current === 'system' ? systemColorScheme === 'dark' : current === 'dark';
      return currentlyDark ? 'light' : 'dark';
    });
  }, [systemColorScheme]);

  const contextValue = useMemo(
    () => ({
      isDark,
      themePreference,
      setThemePreference,
      toggleTheme,
    }),
    [isDark, themePreference, toggleTheme]
  );

  const paperTheme = isDark ? CombinedDarkTheme : CombinedLightTheme;
  const navigationTheme = isDark ? NavigationAdaptedDarkTheme : NavigationLightTheme;

  return (
    <ThemeContext.Provider value={contextValue}>
      <PaperProvider
        theme={paperTheme}
        settings={{ icon: (props) => <MaterialCommunityIcons {...props} /> }}
      >
        <NavigationThemeProvider value={navigationTheme}>{children}</NavigationThemeProvider>
      </PaperProvider>
    </ThemeContext.Provider>
  );
}

export function useThemePreferences() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemePreferences must be used within an AppThemeProvider');
  }

  return context;
}
