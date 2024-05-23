import { todoListData } from '@/components/Context/TodoContext';
import FlatListItem from '@/components/Flatlist/FlatListItem';
import TodoListItems from '@/components/TodoListComponents/TodoListItems';
import { router } from 'expo-router';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Modal } from 'react-native';

const Todo = () => {
    const {setTodoLists,todoLists} = useContext<any>(todoListData);
    const [showModal, setShowModal] = useState(false);
    
  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <View>
          <Image source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png' }} style={styles.userPhoto} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}> Dante Progio</Text>
          <Text style={styles.info}>Software Developer / React JS Master</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>More..</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>Daily Task</Text>
        {/* <FlatList
          data={todoLists}
          renderItem={({item}) => <RenderStatItem todoID={item.id} todoTitle={item.title} TodoStatus={item.status} />}
          keyExtractor={(todoLists, index) => index.toString()}
          numColumns={1}
        /> */}
        <FlatListItem data={todoLists} />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={()=>router.push('/addTodoModal')}>
        <Text style={styles.addButtonText} >+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:60,
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
});

export default Todo