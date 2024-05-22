import { todoListData } from "@/app/(tabs)";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { TextInput,StyleSheet,Button,View, Pressable } from "react-native"
import { Alert } from "react-native";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
const AddTodo = () => {
    const {setTodoLists,todoLists} = useContext(todoListData);
    const [task,setTask] = useState()
    const addTask = () => {
       if (task === undefined || task === "")  {
        Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'Danger',
            textBody: 'Task is required!',
            button: 'close',
          });
       }else{
            setTodoLists([...todoLists, {id: todoLists.length + 1, title: task}]);
           setTask('')
           Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Congrats! Your task is Added in the list',
            button: 'close',
          });
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
        <AlertNotificationRoot>
            <View style={styles.fixToText}>
                <TextInput
                style={styles.input}
                placeholder="Add Todo"
                value={task}
                onChangeText={(text)=>setTask(text)}
                />
                <View style={styles.buttonContainer} >
                    <AntDesign name="plus" size={30} color="white" onPress={()=>createTwoButtonAlert()} /> 

                </View>
            </View>
        </AlertNotificationRoot>
           

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
      borderRadius: 6,
      borderColor: 'grey',
      backgroundColor: 'white',
      fontSize: 20,
      flexDirection: "row",
    },
     buttonContainer: { 
        margin: -15,
        backgroundColor: '#AF8F6F',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth:'10%',
        flexDirection: "row",
        marginLeft: 16,
      },
    
    
  });

export default AddTodo;