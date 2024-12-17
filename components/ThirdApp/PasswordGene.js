import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

let schema = yup.object().shape({
  passwordLength: yup
    .number()
    .required('Lenght is required')
    .min(4, 'Require min 4 numbers')
    .max(16, 'Should not more tha 16 numbers'),
});

const PasswordGen = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGen, setIspasswordGen] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  function generatePassword(passwordLength) {
    let characterList = '';

    const upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const numberslen = '0123456789';
    const specialChar = '!@#$%^&*-()_+<>?/~';

    if (lowerCase) {
      characterList += lowerCaseChar;
    }
    if (upperCase) {
      characterList += upperCaseChar;
    }
    if (numbers) {
      characterList += numberslen;
    }
    if (symbol) {
      characterList += specialChar;
    }

    if (characterList.length === 0) {
      alert('Please select at least one option for password generation.');
      return;
    }

    const passWordResult = createPassword(characterList, passwordLength);

    setPassword(passWordResult);
    setIspasswordGen(true);
  }

  function createPassword(characters, passwordLength) {
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }

  function resetPassword() {
    setPassword('');
    setLowerCase(false);
    setUpperCase(false);
    setNumber(false);
    setSymbol(false);
    setIspasswordGen(false);
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={style.formContainer}>
        <Text style={style.header}>Password Generator</Text>
        <Formik
          initialValues={{passwordLength: ''}}
          validationSchema={schema}
          onSubmit={values => {
            generatePassword(Number(values.passwordLength));
          }}>
          {({
            values,

            errors,

            touched,

            handleChange,

            handleBlur,
            isValid,

            handleSubmit,

            handleReset,

            /* and other goodies */
          }) => (
            <>
              <View style={style.inputWrapper}>
                <View style={style.inputWrapperbox}>
                  <Text style={style.title}>Password Length</Text>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text style={style.error}>{errors.passwordLength}</Text>
                  )}
                  <TextInput
                    style={style.inputBox}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 6"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={style.inputWrapper}>
                <Text style={style.checkBox}>Lower Case</Text>
                <BouncyCheckbox
                  disableBuiltState
                  isChecked={lowerCase}
                  onPress={() => setLowerCase(!lowerCase)}
                  fillColor="#1287A5"
                />
              </View>
              <View style={style.inputWrapper}>
                <Text style={style.checkBox}>Number</Text>
                <BouncyCheckbox
                  disableBuiltState
                  isChecked={numbers}
                  onPress={() => setNumber(!numbers)}
                  fillColor="#EA7773"
                />
              </View>
              <View style={style.inputWrapper}>
                <Text style={style.checkBox}>Upper Case</Text>
                <BouncyCheckbox
                  disableBuiltState
                  isChecked={upperCase}
                  onPress={() => setUpperCase(!upperCase)}
                  fillColor="#3C40C6"
                />
              </View>
              <View style={style.inputWrapper}>
                <Text style={style.checkBox}>Symbol</Text>
                <BouncyCheckbox
                  disableBuiltState
                  isChecked={symbol}
                  onPress={() => setSymbol(!symbol)}
                  fillColor="#AE1438"
                />
              </View>
              <View style={style.actionForm}>
                <TouchableOpacity
                  disabled={!isValid}
                  style={style.primaryButton}
                  onPress={handleSubmit}>
                  <Text style={style.primaryButtonTxt}>Generate Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.secondaryButton}
                  onPress={() => {
                    handleReset();
                    resetPassword();
                  }}>
                  <Text style={style.secondaryButtonTxt}>Reset</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>

        {isPasswordGen && (
          <View style={style.card}>
            <Text style={style.cardText}>Long press to copy</Text>
            <Text selectable={true} style={style.password}>
              {password}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default PasswordGen;

const style = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    padding: 16,
    borderRadius: 8,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  inputWrapperbox: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -4,
    marginBottom: 6,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
  },
  checkBox: {
    fontSize: 16,
    color: '#555',
    marginRight: 10,
  },
  actionForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#3C40C6',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  primaryButtonTxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#AE1438',
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  secondaryButtonTxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    marginTop: 30,
    backgroundColor: '#192A56',
    padding: 16,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#555',
    marginBottom: 10,
  },
  password: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3C40C6',
    textAlign: 'center',
  },
});
