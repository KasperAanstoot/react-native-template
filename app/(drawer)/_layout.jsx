import { Drawer } from 'expo-router/drawer';
import { useTheme } from 'react-native-paper';

export default function DrawerLayout() {
  const theme = useTheme();

  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.onPrimary,
        sceneContainerStyle: { backgroundColor: theme.colors.background },
        drawerActiveBackgroundColor: theme.colors.secondaryContainer,
        drawerActiveTintColor: theme.colors.onSecondaryContainer,
        drawerInactiveTintColor: theme.colors.onSurfaceVariant,
        drawerStyle: { backgroundColor: theme.colors.surface },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Welcome',
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: 'Settings',
          drawerLabel: 'Settings',
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          title: 'About',
          drawerLabel: 'About',
        }}
      />
    </Drawer>
  );
}
