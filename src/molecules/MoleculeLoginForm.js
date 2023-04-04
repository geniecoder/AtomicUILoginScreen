import React from 'react';
import {View} from 'react-native';
import AtomTextInput from '../atoms/AtomTextInput';
import AtomButton from '../atoms/AtomButton';

const MoleculeLoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  onPress,
}) => {
  return (
    <View>
      <AtomTextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <AtomTextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <AtomButton title="Login" onPress={onPress} />
    </View>
  );
};

export default MoleculeLoginForm;
