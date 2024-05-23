import { Image, StyleSheet, Platform, Button,View,Text  } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import AddTodo from '@/components/TodoListComponents/AddTodo';
import TodoListItems from '@/components/TodoListComponents/TodoListItems';
import { createContext, useContext, useState,useEffect } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { SearchTaskCompleted, todoListData } from '@/components/Context/TodoContext';

export default function HomeScreen() {
  const {setTodoLists,todoLists} = useContext<any>(todoListData);
  const [TaskSearch,setTaskSearch] = useState<string>('')
  
  const filteredTodo = todoLists.filter((task) => {
    return task.check;
  });

    useEffect(() => {
    
  }, []);
  
  const SearchTaskData= filteredTodo.filter((task) => {
    return task.title.toLowerCase().includes(TaskSearch.toLowerCase());
  });

  




  return (
          <SearchTaskCompleted.Provider value={{TaskSearch,setTaskSearch}} >
            <ParallaxScrollView
              headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
              headerImage={
                <>
                <Text style={styles.title}>List Of Completed</Text>
                <Text style={styles.title1}>Todo</Text>
                <Image
                source={require('@/assets/images/background.png')}
                  style={styles.reactLogo}
                />
                <View style={styles.AddTask}>
                    <AddTodo data='Search'/>  
                </View>
                
                </>
                
              }>
              <ThemedView style={styles.container}>
                {
                  TaskSearch === '' ?
                    <TodoListItems  data={filteredTodo} />
                    :
                    <TodoListItems  data={SearchTaskData} />
                }
                
              </ThemedView>
      
            </ParallaxScrollView>
          </SearchTaskCompleted.Provider>

      



  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: -20,
    minWidth: 386,
    marginLeft: -30
  },
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
    marginTop: '15%',
    marginLeft: '8%',
    fontSize: 45,
    fontFamily: "Scripto2OR2v",
    color: '#D8AE7E',
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1000,
    
    
  },
  title1:{
    marginTop: '24%',
    marginLeft: '35%',
    fontSize: 60,
    color: '#D8AE7E',
    position: 'absolute',
    fontFamily: "Scripto2OR2v",
    top: 10,
    left: 10,
    zIndex: 1000,
   
  },


  


});
