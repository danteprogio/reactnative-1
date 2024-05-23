
import { useContext, useEffect, useRef } from "react";
import { TextInput,StyleSheet,Button,View, ImageBackground,Text,Animated } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { todoListData } from "../Context/TodoContext";
import { Ionicons, Octicons } from "@expo/vector-icons";
const TodoListItems = ({data}) => {
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
                    value.status = "Completed'"
                }
                console.log(value)
            }
            return value;
        })
    )
   }

    const deleteTask = () =>{
        console.log(1)
    }   

    return (
        <>
        {
            data.map((item, index) => {
                return (
                    <View key={index} >
                        <ImageBackground source={require('@/assets/images/background.png')} style={styles.backGroundStyles} >
                            <View key={index} style={styles.container}>
                                <BouncyCheckbox
                                style={styles.input}
                                size={27}
                                fillColor="#74512D"
                                unFillColor="#FFFFFF"
                                text={item.title}
                                iconStyle={{ borderColor: "#74512D" }}
                                innerIconStyle={{ borderWidth: 3 }}
                                textStyle={{ fontWeight: "bold" }}
                                isChecked={item.check}
                                onPress={() =>upDateTodoList(item.id)}
                                />
                            
                                <View style={styles.icons}>
                                    <Octicons name="pencil" size={24} color="black" />
                                </View>

                                <View style={styles.icons} >
                                    <Ionicons name="trash-outline" size={24} color="red" />
                                </View>
                            </View>
                        </ImageBackground >
                    </View>
                    )

                    
            })
        }
        </>
           

    )
}

const styles = StyleSheet.create({
    fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
      },
    icons:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginRight: 3,
        marginHorizontal: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },      
        
    },
    container: {
        borderRadius: 5,
        alignItems: 'center',
        margin: 1,
        flexDirection: 'row',
       
    },
      input: {
        flex: 1,
        height: 56,
        borderRadius: 5,
        paddingHorizontal: 20,
        color: '#666666'
    },
    backGroundStyles:{
        borderRadius: 5,
        marginBottom: 6,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
    }
  });

export default TodoListItems;