import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const AtomTextInput = ({onChangeText, value, placeholder, secureTextEntry}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    margin: 5,
  },
});

export default AtomTextInput;
