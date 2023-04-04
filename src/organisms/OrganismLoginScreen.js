import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MoleculeLoginForm from '../molecules/MoleculeLoginForm';

const OrganismLoginScreen = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <MoleculeLoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onPress={() => onLogin(email, password)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default OrganismLoginScreen;
