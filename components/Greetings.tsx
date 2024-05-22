import { Button } from "react-native";
import { ThemedText } from "./ThemedText"
import { ThemedView } from "./ThemedView";
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { useState } from "react";

const Greetings = () =>{
    const [count,setCount] = useState('')
    return(
        <>
        <ThemedView>
            <ThemedText  type="title">
                Hi Dante 
            </ThemedText>
                <TextInput
                style={styles.input}
                placeholder="Answer"
                value={count}                />  
            <Button
            onPress={() => setCount(count+1)}
            title="Calculate"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </ThemedView>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Greetings;