
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
export default function AdvancedLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer >
          <Drawer.Screen name="index" options={{ title: 'Dynamic ui' }} />
          <Drawer.Screen name="Forms" options={{ title: 'Forms' }} />
          <Drawer.Screen name="List" options={{ title: 'List' }} />
        </Drawer>
      </GestureHandlerRootView>
  );
}
