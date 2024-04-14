import { Slot, Stack } from 'expo-router';
// import { Tabs } from 'expo-router/tabs';
import { FontAwesome,MaterialIcons,Ionicons,Feather} from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// export default function HomeLayout() {
//   return <Slot />;
// }
export default function BasicLayout() {
    return (
    <Stack>
         <Stack.Screen name="index" options={{ title: 'Home',headerShown:false }} />
      <Stack.Screen name="Dynamicui" options={{ title: 'Dynamicui' }}/>
      <Stack.Screen name="Forms" options={{ title: 'Forms' }}/>
      <Stack.Screen name="List" options={{ title: 'List' }}/>
    </Stack>
  );
}
