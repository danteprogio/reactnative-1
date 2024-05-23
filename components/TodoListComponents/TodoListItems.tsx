
import { TextInput,StyleSheet,Button,View, ImageBackground,Text } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
interface Input {
    addTask: (task: string) => void;
}
const TodoListItems = ({data}) => {
   console.log(data);
    return (
        <>
        {
            data.reverse().map((item, index) => {
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
                                onPress={(isChecked: boolean) => {console.log(isChecked)}}
                                />
                                 <Text>Pending..</Text>
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
    }
  });

export default TodoListItems;