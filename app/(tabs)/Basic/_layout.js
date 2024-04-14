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
         <Stack.Screen name="index" options={{ title: 'Core Component'}} />
      {/* <Stack.Screen name="Corecomponent" options={{ title: 'core' }}/> */}
      <Stack.Screen name="Styles" options={{ title: 'styles' }}/>
    </Stack>
  );
}
