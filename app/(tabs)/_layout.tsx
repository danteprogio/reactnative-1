import { Tabs } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { getTodoList } from '@/requests/todo.request';
import { todoListData } from '@/components/Context/TodoContext';
export default function TabLayout() {
  const {setTodoLists,todoLists} = useContext<any>(todoListData);
  const [listOfTodo, setListOfTodo] = useState([]);
  const colorScheme = useColorScheme();


  useEffect(() => {
    getTodoList()
      .then((data)=>{
        setTodoLists(data)
      })
  }, [todoLists]);


  return (
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
  );
}
