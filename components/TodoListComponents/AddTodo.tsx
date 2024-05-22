import { todoListData } from "@/app/(tabs)";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { TextInput,StyleSheet,Button,View } from "react-native"
import { Alert } from "react-native";
const AddTodo = () => {
    const {setTodoLists,todoLists} = useContext(todoListData);
    const [task,setTask] = useState()
    const addTask = () => {
        console.log(task)
       if (task === undefined || task === "")  {
        
       }else{
            setTodoLists([...todoLists, {id: todoLists.length + 1, title: task}]);
           setTask('')
       }
    }

    const createTwoButtonAlert = () =>
        Alert.alert('Notification', 'Do you want to add this task?', [
          {
            text: 'NO',
            onPress: () => console.log('Cancel Pressed'),
          },
          {text: 'YES', onPress: () => addTask()},
        ]);
    return (
      
        <View style={styles.fixToText}>
            <TextInput
            style={styles.input}
            placeholder="Add Todo"
            value={task}
            onChangeText={(text)=>setTask(text)}
            />
            <AntDesign name="plus" size={24} color="black" onPress={()=>createTwoButtonAlert()} /> 
        </View>
           

    )
}

const styles = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
      },
    input: {
      height: 50,
      margin: -10,
      minWidth:'90%',
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      borderColor: 'grey',
      backgroundColor: 'white',
      fontSize: 20,
      flexDirection: "row"
    },
  });

export default AddTodo;