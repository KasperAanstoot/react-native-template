import { StyleSheet } from 'react-native';
import { List, RadioButton, Text, useTheme } from 'react-native-paper';

import { Screen } from '../../src/components/Screen';
import { useThemePreferences } from '../../src/providers/ThemeProvider';

export default function SettingsScreen() {
  const theme = useTheme();
  const { themePreference, setThemePreference } = useThemePreferences();

  const handleChange = (value) => {
    if (value === 'system' || value === 'light' || value === 'dark') {
      setThemePreference(value);
    }
  };

  return (
    <Screen>
      <List.Section style={styles.section}>
        <List.Subheader style={[styles.subheader, { color: theme.colors.primary }]}>Appearance</List.Subheader>
        <RadioButton.Group onValueChange={handleChange} value={themePreference}>
          <List.Item
            title="Match system"
            description="Follow the device appearance preference"
            right={() => <RadioButton value="system" />}
            onPress={() => setThemePreference('system')}
          />
          <List.Item
            title="Light"
            description="Use a light color scheme"
            right={() => <RadioButton value="light" />}
            onPress={() => setThemePreference('light')}
          />
          <List.Item
            title="Dark"
            description="Use a dark color scheme"
            right={() => <RadioButton value="dark" />}
            onPress={() => setThemePreference('dark')}
          />
        </RadioButton.Group>
      </List.Section>
      <Text style={styles.helperText} variant="bodySmall">
        Theme preferences automatically sync with both React Native Paper and the drawer navigation UI.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 8,
  },
  subheader: {
    fontWeight: '600',
    fontSize: 16,
  },
  helperText: {
    marginHorizontal: 16,
    marginTop: 8,
  },
});
