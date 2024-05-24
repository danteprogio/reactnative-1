
import { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { todoListData } from '../Context/TodoContext';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const FlatListItem = ({data}) => {
    const {setTodoLists,todoLists} = useContext<any>(todoListData);
    const  upDateTodoList = (id,task) =>{
        setTodoLists(
            todoLists.map((value) => {
                if (value.id === id) {
                    if (value.check === true) {
                        value.check = false;
                        value.status = 'Pending'
                    }else{
                        value.check = true;
                        value.status = "Completed"
                    }
                    console.log(value)
                }
                return value;
            })
        )
       }
    const RenderStatItem = ({todoTitle,todoID,TodoStatus,TodoCheck}) => (
        <View style={styles.statItem} key={todoID}>
        <BouncyCheckbox
        size={27}
        fillColor="#74512D"
        unFillColor="#FFFFFF"
        text={todoTitle}
        iconStyle={{ borderColor: "#74512D" }}
        innerIconStyle={{ borderWidth: 3 }}
        textStyle={{ fontWeight: "bold", fontSize:20}}
        isChecked={TodoStatus === "complete" ? true : false}
        onPress={() =>upDateTodoList(todoID)}
        />
        <Text style={styles.statsCategory}>Task ID: {todoID}</Text>
        {
          TodoStatus === 'Completed'? (
            <TouchableOpacity style={styles.statItem3}>
                <Text style={styles.statValue}>{TodoStatus}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.statItem2}>
                <Text style={styles.statValue}>{TodoStatus}</Text>
            </TouchableOpacity>
          )
        }
        
        </View>
    );

    
  return (
        <FlatList
          data={data}
          renderItem={({item}) => <RenderStatItem todoID={item.id} todoTitle={item.task} TodoStatus={item.status}   />}
          keyExtractor={(data, index) => index.toString()}
          numColumns={1}
        />
      
  );
};

const styles = StyleSheet.create({

  statItem: {
    marginTop:20,
    flex: 1,
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
    color: 'white',
  },
  statsCategory: {
    color: '#999',
  },
  statItem2: {
    marginTop:20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#A34343',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    },statItem3: {
      marginTop:20,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
      marginVertical: 5,
      borderRadius: 5,
      backgroundColor: '#40A578',
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      },
});

export default FlatListItem