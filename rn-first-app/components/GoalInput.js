import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnterdGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnterdGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnterdGoal("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal" 
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                    <Button title="ADD" onPress={addGoalHandler}/>
                </View>
            </View>
           
        </Modal>
        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%"
    }
    // if you want button to have same width, then add View for each Button and add style as well
})

export default GoalInput;