import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { todoListData } from '@/components/Context/TodoContext';
import { useColorScheme } from '@/hooks/useColorScheme';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [todoLists,setTodoLists] = useState([])

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    AnandaBlack: require('../assets/fonts/AnandaBlack.ttf'),
    Scripto2OR2v: require('../assets/fonts/Scripto-2OR2v.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

 
  return (
      <todoListData.Provider value={{setTodoLists, todoLists}}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="camera" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
            name="addTodoModal"
            options={{
              // Set the presentation mode to modal for our modal route.
              presentation: 'modal',
              title: 'Add Task',
            }}
          />
          </Stack>
        </ThemeProvider>
      </todoListData.Provider>
  );
}
