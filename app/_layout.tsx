import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';

import { AppThemeProvider } from '../src/providers/ThemeProvider';

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'LuckiestGuy-Regular': require('../assets/fonts/LuckiestGuy-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AppThemeProvider>
      <StatusBar style="auto" />
      <Slot />
    </AppThemeProvider>
  );
}
