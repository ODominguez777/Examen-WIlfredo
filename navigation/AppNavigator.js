import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OnBoarding from "../screens/auth/OnBoarding";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirebaseApp } from "../utils/firebaseHelper";
import { Text, View } from "react-native";
import Home from "../screens/app/Home";
import DrawerContent from "../components/drawerContent/DrawerContent";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const [user, setUser] = useState();
  const app = getFirebaseApp();
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setUser(userAuth);
        // ...
      } else {
        setUser(undefined);
      }
    });
  }, []);

  if (user) {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen name="Inicio" component={Home} />
          <Drawer.Screen name="Cerrar sesion" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
