import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import AddTodo from '@/components/TodoListComponents/AddTodo';
import TodoListItems from '@/components/TodoListComponents/TodoListItems';
import { createContext, useContext, useState,useEffect } from 'react';

const todoListData1 = [
  {
  id: 1,
  Todo: 'Learn React Native',
},
{
  id: 2,
  Todo: 'Learn React JS',
}

]
export const todoListData = createContext();


export default function HomeScreen() {
  const [todoLists,setTodoLists] = useState([])
  useEffect(() => {
    console.log(todoLists)
  
  }, [todoLists]);

  return (
      <todoListData.Provider value={{setTodoLists, todoLists}} >
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <Image
            source={{
              uri: 'https://animaker.com/hub/wp-content/uploads/2022/10/5S6813BUQO3A5PSQ-1.gif'
            }}
              style={styles.reactLogo}
            />
          }>
            <AddTodo/>
            <TodoListItems  data={todoLists} />
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
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
