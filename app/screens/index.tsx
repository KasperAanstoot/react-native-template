import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Text, useTheme } from 'react-native-paper';

import { Screen } from '../src/components/Screen';
import { useThemePreferences } from '../src/providers/ThemeProvider';

export default function HomeScreen() {
  const theme = useTheme();
  const { isDark, toggleTheme } = useThemePreferences();

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Card style={styles.card}>
          <Card.Title title="Expo Router Template" subtitle="React Native Paper + Drawer navigation" />
          <Card.Content>
            <Text variant="bodyMedium" style={styles.paragraph}>
              This starter kit wires up Expo Router with React Navigation's drawer navigator and React Native Paper.
              Use it as the foundation for your next React Native project.
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              The template includes a theming system that keeps React Native Paper and React Navigation in sync.
              Toggle the theme to see how both libraries respond.
            </Text>
            <Button mode="contained" onPress={toggleTheme} icon={isDark ? 'weather-sunny' : 'weather-night'}>
              Switch to {isDark ? 'light' : 'dark'} mode
            </Button>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="What&apos;s next?" />
          <Card.Content>
            <Text variant="bodyMedium" style={styles.paragraph}>
              Edit <Text style={{ fontWeight: 'bold', color: theme.colors.primary }}>app/screens/index.tsx</Text> to
              customize the home screen and start building features.
            </Text>
            <Text variant="bodyMedium" style={styles.paragraph}>
              Add new screens by creating components inside <Text style={{ fontWeight: 'bold', color: theme.colors.primary }}>app/screens</Text> and
              updating the corresponding route files in <Text style={{ fontWeight: 'bold', color: theme.colors.primary }}>app/(drawer)</Text> or by composing
              nested layouts with Expo Router.
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
    gap: 16,
  },
  card: {
    borderRadius: 16,
  },
  paragraph: {
    marginBottom: 12,
  },
});
