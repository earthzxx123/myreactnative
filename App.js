// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Welcome from './screens/Welcome';
// import Ex1 from './screens/week2/Ex1';
// import Ex2 from './screens/week2/EX2';
// import Ex3 from './screens/week2/Ex3';
// import Ex4 from './screens/week2/Ex4';
// import Ex5 from './screens/week2/Ex5';
// import Ex6 from './screens/week2/Ex6';
// import Ex7 from './screens/week2/Ex7';
// import Ex8 from './screens/week2/Ex8';
// import Ex9 from './screens/week2/Ex9';
// import Ex10 from './screens/week2/Ex10';
// import Ex11 from './screens/week2/Ex11';
// import Ex12 from './screens/week2/Ex12';
// import Travel from './screens/week3/Travel';
// import Resort from './screens/week4/Resort';
// import Card from './components/week3/Card';
// import Signup from './components/week3/Signup';
// import Health from './screens/week5/Health';
// import Try from './screens/week2/try';
// import Home from './screens/week6/Hoem';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import RootStack from '/naviagation/RootStack';

export default function app() {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      {/* <BottomTab /> */}
      <RootStack />
    </NavigationContainer>

  );
} 