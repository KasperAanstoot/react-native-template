import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { AppThemeProvider } from '../src/providers/ThemeProvider';

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <StatusBar style="auto" />
      <Slot />
    </AppThemeProvider>
  );
}
