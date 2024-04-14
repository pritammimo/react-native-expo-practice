import { Slot } from 'expo-router';
import { Tabs } from 'expo-router/tabs';
import { FontAwesome,MaterialIcons,Ionicons,Feather} from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// export default function HomeLayout() {
//   return <Slot />;
// }
export default function HomeLayout() {
    return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home',tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} /> }} />
      <Tabs.Screen name="Corecomponent" options={{ title: 'Core',tabBarIcon: ({ color }) => <Ionicons size={28} name="logo-web-component" color={color} /> }} />
      <Tabs.Screen name="Dynamicui" options={{ title: 'Dynamic',tabBarIcon: ({ color }) => <MaterialIcons name="dynamic-feed" size={28} color={color} /> }} />
      <Tabs.Screen name="List" options={{ title: 'List',tabBarIcon: ({ color }) => <Feather name="list" size={28} color={color} /> }} />
      <Tabs.Screen name="Forms" options={{ title: 'Forms',tabBarIcon: ({ color }) => <FontAwesome name="wpforms" size={28} color={color} /> }} />
      <Tabs.Screen name="Styles" options={{ title: 'Styles',tabBarIcon: ({ color }) => <MaterialIcons name="style" size={28} color={color} /> }} />
    </Tabs>
  );
}
