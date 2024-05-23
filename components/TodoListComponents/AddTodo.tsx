import { todoListData,SearchTaskCompleted } from "@/components/Context/TodoContext";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { TextInput,StyleSheet,Button,View, Text } from "react-native"
import { Alert } from "react-native";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import uuid from 'react-native-uuid';
import "react-native-get-random-values";
const AddTodo = ({data}) => {
    const {setTodoLists,todoLists} = useContext<any>(todoListData);
    const {TaskSearch,setTaskSearch} = useContext<any>(SearchTaskCompleted);
    const [task,setTask] = useState<string>()
    const addTask = () => {
       if (task === undefined || task === "")  {
        Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'Danger',
            textBody: 'Task is required!',
            button: 'close',
          });
       }else{
            setTodoLists([...todoLists, {id: uuid.v4(), title: task,check: false,status:'Pending'}]);
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

                    {
                        data === 'Search' ? 
                                <TextInput
                                style={styles.input}
                                placeholder="Search Task"
                                value={task}
                                onChangeText={(text)=> setTaskSearch(text)}
                                 />
                        :
                                <TextInput
                                style={styles.input}
                                placeholder="Add Todo"
                                value={task}
                                onChangeText={(text)=>setTask(text)}
                                />
                            
                    }


                    {
                        data === 'Search' ? 
                            <AntDesign name="search1" size={30} color="#AF8F6F" onPress={()=>createTwoButtonAlert()} /> 
                         
                        :
                        <View style={styles.buttonContainer} >
                            <AntDesign name="plus" size={30} color="white" onPress={()=>createTwoButtonAlert()} /> 
                        </View>    
                    }

                
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