import React, {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Modal,
  Alert,
  TouchableHighlight,
} from 'react-native';

import {Button, DateInput, Input, NavigationHeader} from '../../components';

import {
  BACKGROUND_COLOR,
  LIGHT_YELLOW_COLOR,
  WHITE_COLOR,
  DARK_FONT_COLOR,
  MULI_BOLD,
  MULI_REGULAR,
} from '../../assets/styles';

const RegisterStudentScreen = props => {
  // Form inputs
  const [names, onChangeNames] = React.useState('');
  const [lastNames, onChangeLastNames] = React.useState('');
  const [code, onChangeCode] = React.useState('');
  const [date, onChangeDate] = React.useState('');
  const [institute, onChangeInstitute] = React.useState('');
  const [country, onChangeCountry] = React.useState('');
  const [city, onChangeCity] = React.useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const checkForm = () => {
    const generateSentence = field =>
      `Debes ingresar ${
        field === 'Fecha de nacimiento' ||
        field === 'Ciudad' ||
        field === 'Institución'
          ? 'la'
          : 'el'
      } ${field} del estudiante.`;

    if (!names.length) {
      setModalMessage(generateSentence('Nombre'));
      setModalVisible(true);
      return false;
    }
    if (!lastNames.length) {
      setModalMessage(generateSentence('Apellido'));
      setModalVisible(true);
      return false;
    }
    if (!code.length) {
      setModalMessage(generateSentence('Código'));
      setModalVisible(true);
      return false;
    }
    if (isNaN(code)) {
      setModalMessage('El código del estudiante debe ser númerico.');
      setModalVisible(true);
      return false;
    }
    if (!date.length) {
      setModalMessage(generateSentence('Fecha de nacimiento'));
      setModalVisible(true);
      return false;
    }
    if (!institute.length) {
      setModalMessage(generateSentence('Institución'));
      setModalVisible(true);
      return false;
    }
    if (!country.length) {
      setModalMessage(generateSentence('País'));
      setModalVisible(true);
      return false;
    }
    if (!city.length) {
      setModalMessage(generateSentence('Ciudad'));
      setModalVisible(true);
      return false;
    }
    return true;
  };

  const onPressButton = () => {
    if (checkForm()) {
      props.createStudent(
        names,
        lastNames,
        code,
        date,
        institute,
        country,
        city,
        props.user,
      );
      props.navigation.goBack();
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalText}>{modalMessage}</Text>
            <TouchableHighlight
              style={modalStyles.closeButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={modalStyles.textStyle}>Entendido</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <NavigationHeader title="Registro de estudiante" />
      </View>
      <View style={styles.form}>
        <Input
          labelText="Nombres"
          onChange={onChangeNames}
          value={names}
          placeholder="Primer y/o segundo nombre"
          marginBottom={15}
        />
        <Input
          labelText="Apellidos"
          onChange={onChangeLastNames}
          value={lastNames}
          placeholder="Primer y segundo apellido"
        />
        <DateInput
          labelText="Fecha de nacimiento"
          placeholder="Seleccionar fecha"
          date={date}
          onDateChange={onChangeDate}
        />
        <Input
          labelText="País"
          onChange={onChangeCountry}
          value={country}
          placeholder="Seleccionar País"
          marginBottom={15}
        />
        <Input
          labelText="Ciudad"
          onChange={onChangeCity}
          value={city}
          placeholder="Ingresar Ciudad"
        />
        <Input
          labelText="Institución"
          onChange={onChangeInstitute}
          value={institute}
          placeholder="Ingresar Institución"
          marginBottom={15}
        />
        <Input
          labelText="Código estudiante"
          keyboardType="numeric"
          onChange={onChangeCode}
          value={code}
          placeholder="Ingresar código"
        />
      </View>

      <Button
        onPress={onPressButton}
        text="Registrar estudiante"
        icon="arrow-right"
        iconPosition="right"
        backgroundColor={LIGHT_YELLOW_COLOR}
        fontColor={DARK_FONT_COLOR}
        marginForText={65}
      />
    </View>
  );
};

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: LIGHT_YELLOW_COLOR,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: DARK_FONT_COLOR,
    fontFamily: MULI_BOLD,
    textAlign: 'center',
  },
  modalText: {
    fontFamily: MULI_REGULAR,
    fontSize: 18,
    color: WHITE_COLOR,
    marginBottom: 15,
    textAlign: 'center',
  },
});
const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: BACKGROUND_COLOR,
    width: '100%',
    height: '100%',
    paddingHorizontal: 79,
    paddingVertical: 80,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '20%',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    marginBottom: 71,
  },
  formColumn: {
    height: '100%',
    justifyContent: 'space-between',
  },
  formWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default RegisterStudentScreen;
