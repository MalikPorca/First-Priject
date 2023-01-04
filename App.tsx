import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const SomeButton = () => {
    alert("Ispisemo neki text po izboru ili pozovemo nesto drugo ovim buttonom, kao npr drugi page")
  }


  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="input texst"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="input some number"
        keyboardType="numeric"
        
      />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={SomeButton}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },
});

export default UselessTextInput;