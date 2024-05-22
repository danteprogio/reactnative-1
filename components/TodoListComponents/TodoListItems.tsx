
import { TextInput,StyleSheet,Button,View } from "react-native"
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
                    <View key={index} style={styles.container}>
                        <BouncyCheckbox
                        style={styles.input}
                        size={25}
                        fillColor="#ACE1AF"
                        unFillColor="#FFFFFF"
                        text={item.title}
                        iconStyle={{ borderColor: "#ACE1AF" }}
                        innerIconStyle={{ borderWidth: 3 }}
                        textStyle={{ fontWeight: "bold" }}
                        onPress={(isChecked: boolean) => {console.log(isChecked)}}
                        />
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
    },
      input: {
        flex: 1,
        height: 56,
        borderRadius: 5,
        paddingHorizontal: 20,
        backgroundColor: '#E0FBE2',
        color: '#666666'
    },
  });

export default TodoListItems;