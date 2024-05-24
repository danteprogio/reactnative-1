import { todoListData } from '@/components/Context/TodoContext';
import FlatListItem from '@/components/Flatlist/FlatListItem';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';


const CompletedTodo = () => {
    const {setTodoLists,todoLists} = useContext<any>(todoListData);
    const [showModal, setShowModal] = useState(false);
    const [TaskSearch,setTaskSearch] = useState<string>('')
  
    const filteredTodo = todoLists.filter((task) => {
      return task.check;
    });

    const SearchTaskData= filteredTodo.filter((task) => {
      return task.title.toLowerCase().includes(TaskSearch.toLowerCase());
    });

    
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
        <Text style={styles.statsTitle}>List Of Completed Task</Text>
        <FlatListItem data={filteredTodo} />
      </View>
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

export default CompletedTodo