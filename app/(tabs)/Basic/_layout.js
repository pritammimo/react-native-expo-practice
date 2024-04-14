
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';
export default function BasicLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer  screenOptions={{drawerPosition:"right",headerRight:() => <DrawerToggleButton />,headerLeft:false}}>
          <Drawer.Screen name="index" options={{ title: 'Core Component' }} />
          <Drawer.Screen name="Styles" options={{ title: 'Styles' }} />
        </Drawer>
      </GestureHandlerRootView>
  );
}
