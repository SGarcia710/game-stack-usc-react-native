/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import menuImageOne from '../../assets/images/MenuItemOne.png';
import menuImageTwo from '../../assets/images/MenuItemTwo.png';
import menuImageThree from '../../assets/images/MenuItemThree.png';

import Header from '../../components/Header';
import MenuButton from '../../components/MenuButton';
import {PURPLE_COLOR} from '../../assets/styles';

const MenuScreen = props => {
  const onPressRegisterStudent = () => {
    props.navigation.navigate('RegisterStudent');
  };
  const onPressStudentsList = () => {
    // console.log(`Email: ${email} y Password: ${password}.`);
    // props.navigation.navigate('GameOne');
    console.log('Lista de estudiantes');
  };
  const onPressEvaluateStudent = () => {
    props.navigation.navigate('GamesMenu');
    // console.log('Menu de estudiantes');
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Header title="GamesStack" />
      </View>
      <View style={styles.buttons}>
        <MenuButton
          image={menuImageOne}
          onPress={onPressRegisterStudent}
          text="Registrar estudiante"
          marginBottom={20}
        />
        <MenuButton
          image={menuImageTwo}
          onPress={onPressStudentsList}
          text="Lista de estudiantes"
          marginBottom={20}
        />
        <MenuButton
          image={menuImageThree}
          onPress={onPressEvaluateStudent}
          text="Evaluar estudiante"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: PURPLE_COLOR,
    width: '100%',
    height: '100%',
    paddingHorizontal: 79,
    paddingVertical: 80,
  },
  header: {
    width: '100%',
    height: '20%',
  },
  buttons: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuScreen;