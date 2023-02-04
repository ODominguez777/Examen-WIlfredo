import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";


import OnBoarding from "./screens/auth/OnBoarding";
import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp/";


export default function App() {

  return (

    <AppNavigator/>
  );
}


