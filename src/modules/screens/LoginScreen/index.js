import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppIcons} from '../../../general/constants/AppResource';
import AppHeader from '../../components/AppHeader';
import GlobalButton from '../../components/GlobalButton';
import styles from './styles';

export default function LoginScreen(props) {
  return (
    <SafeAreaView>
      <AppHeader backgroundColor="black" title="Login">
        <></>
        <></>
      </AppHeader>
      <ScrollView>
        <View style={styles.loginContainer}>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#ABB4BD"></TextInput>
            <TextInput
              style={[styles.textInput, {marginTop: 8}]}
              placeholder="Password"
              placeholderTextColor="#ABB4BD"
              secureTextEntry={true}></TextInput>
          </View>
          <View style={styles.forgotSuggestion}>
            <Text style={styles.text}>Forgot your password?</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ForgotScreen');
              }}>
              <Image source={AppIcons.arrow_right} />
            </TouchableOpacity>
          </View>
          <GlobalButton action="LOGIN" marginTop={30} />
          <View style={{marginTop: 194}}>
            <Text style={styles.text}>Or login with social account</Text>
          </View>
          <View style={styles.socialSection}>
            <View style={[styles.socialContainer, {marginRight: 8}]}>
              <Image source={AppIcons.google} />
            </View>
            <View style={[styles.socialContainer, {marginLeft: 8}]}>
              <Image source={AppIcons.facebook} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
