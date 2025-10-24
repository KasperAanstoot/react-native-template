import { Linking, StyleSheet } from 'react-native';
import { List, Text } from 'react-native-paper';

import { Screen } from '../../src/components/Screen';

export default function AboutScreen() {
  return (
    <Screen>
      <List.Section style={styles.section}>
        <List.Subheader>Included tooling</List.Subheader>
        <List.Item
          title="Expo Router"
          description="File-system based routing with first-class Expo integration"
          onPress={() => Linking.openURL('https://expo.github.io/router/docs')}
          left={(props) => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="React Native Paper"
          description="Material Design 3 components for React Native"
          onPress={() => Linking.openURL('https://callstack.github.io/react-native-paper/')}
          left={(props) => <List.Icon {...props} icon="palette" />}
        />
        <List.Item
          title="React Navigation Drawer"
          description="A customizable drawer navigator for React Native apps"
          onPress={() => Linking.openURL('https://reactnavigation.org/docs/drawer-navigator')}
          left={(props) => <List.Icon {...props} icon="menu" />}
        />
      </List.Section>
      <Text variant="bodySmall" style={styles.helperText}>
        This screen is a simple list using React Native Paper&apos;s List components. Replace it with your own content to
        describe your project or onboarding information.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 8,
  },
  helperText: {
    marginHorizontal: 16,
    marginTop: 8,
  },
});
