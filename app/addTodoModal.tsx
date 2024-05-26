
import { Link, router } from 'expo-router';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { TextInput } from 'react-native';
import { Alert } from "react-native";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import uuid from 'react-native-uuid';
import "react-native-get-random-values";
import { todoListData,SearchTaskCompleted } from '@/components/Context/TodoContext';
import { Fontisto } from '@expo/vector-icons';


export default function Modal() {
  // const isPresented = router.canGoBack();
  const {setTodoLists,todoLists} = useContext<any>(todoListData);
  console.log(todoLists)
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
      
         const Sample = async () =>{
            await setTodoLists([...todoLists, {id: uuid.v4(), title: task,check: false,status:'Pending'}]);
            setTask('')
         }

         Sample()
          .then(() => {
            Dialog.show({
             type: ALERT_TYPE.SUCCESS,
             title: 'Success',
             textBody: 'Congrats! Your task is Added in the list',
             button: 'Close',
             onPressButton: (()=>router.back())
           });
          })
  
     }
  }

  const createTwoButtonAlert = () =>{
    Alert.alert('Notification', 'Do you want to add this task?', [
      {
        text: 'NO',
        onPress: () => console.log('Cancel Pressed'),
      },
      {text: 'YES', onPress: () => addTask()},
    ]);

  }



  return (
   
    <AlertNotificationRoot>
      <View style={styles.container}>
          <View style={styles.userCard}>
            <View>
              <Image source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png' }} style={styles.userPhoto} />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}> Dante Progio</Text>
              <Text style={styles.info}>Software Developer / React JS Master</Text>
            </View>
            <TouchableOpacity style={styles.editButton} onPress={()=>createTwoButtonAlert()}>
              <Text style={styles.editButtonText} >Post</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.statsCard}>
            <TextInput
              style={styles.statsTitle}
              underlineColorAndroid="transparent"
              placeholder="Type something"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
              value={task}
              onChangeText={(text)=>setTask(text)}
            />
          </View>
          <TouchableOpacity style={styles.cameraIcon} onPress={()=>router.push('/camera')} >
              <Fontisto name="camera" size={24} color="black" />
          </TouchableOpacity>

        </View>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  info: {
    color: '#999',
  },
  editButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#008B8B',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    minWidth:30,
    alignItems: 'center',
  },
  statsCard: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
  },
  statsTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  statItem: {
    marginTop:20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statsCategory: {
    color: '#999',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  cameraIcon:{
    alignItems: 'center',
    marginLeft: '74%'
   
  }
});
