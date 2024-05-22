import { Image, StyleSheet, Platform, Button,View,Text  } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import AddTodo from '@/components/TodoListComponents/AddTodo';
import TodoListItems from '@/components/TodoListComponents/TodoListItems';
import { createContext, useContext, useState,useEffect } from 'react';
import { ALERT_TYPE,AlertNotificationRoot,Toast } from 'react-native-alert-notification';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';



export const todoListData = createContext();


export default function HomeScreen() {
  const [todoLists,setTodoLists] = useState([])
  useEffect(() => {
  }, [todoLists]);

  return (
      
      <todoListData.Provider value={{setTodoLists, todoLists}} >
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <>
            <Text style={styles.title}>Todo List 📋</Text>
            <Image
            source={require('@/assets/images/background.png')}
              style={styles.reactLogo}
            />
            <View style={styles.AddTask}>
                <AddTodo/>  
            </View>
            
            </>
            
          }>
          <View >
            <TodoListItems  data={todoLists} />
          </View>
  
        </ParallaxScrollView>
      </todoListData.Provider>



  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  AddTask: {
      width: '95%',
      paddingLeft: '5%',
      marginTop: '45%',
      height: 800,
  },
  title:{
    marginTop: '22%',
    marginLeft: '10%',
    fontSize: 60,
    fontWeight: 'bold',
    color: '#D8AE7E',
    position: 'absolute',
    fontFamily: 'Roboto',
    top: 10,
    left: 10,
    zIndex: 1000,
  },


  


});
