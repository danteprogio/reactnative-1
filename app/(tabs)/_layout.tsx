import { Tabs } from 'expo-router';
import React, { useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { todoListData } from '@/components/Context/TodoContext';
export default function TabLayout() {
  const [todoLists,setTodoLists] = useState([{"check": true, "id": "7ef99745-3546-4c7c-8f43-2df8344b5051", "status": "Complete", "title": "Create a Todo task"},{"check": false, "id": "1f357cb5-4f65-474b-9e40-96611b89280a", "status": "Pending", "title": "Create a PokeDex"}])
  const colorScheme = useColorScheme();

  return (
    <todoListData.Provider value={{setTodoLists, todoLists}} >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="todo"
          options={{
            title: 'List Of Todo',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="listofcompletedtodo"
          options={{
            title: 'List Of Completed Todo',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </todoListData.Provider>
  );
}
