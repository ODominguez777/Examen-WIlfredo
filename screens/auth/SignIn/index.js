import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Input from "../../../components/Input";
import Styles from "./Styles";
import Boton from "../../../components/Button";
import { getFirebaseApp } from "../../../utils/firebaseHelper";
const SignIn = ({ navigation }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  console.log(values);
  const onChange = (value, key) => {
    setValues({
      ...values,
      [key]: value,
    });
  };
  const onSubmit = () => {
    if (!values.email) {
      Alert.alert("Aviso", "Ingrese su correo electrónico");
      return;
    }
    const app = getFirebaseApp();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          Alert.alert("Correo electrónico inválido");
          return;
        }
        if (error.code === "auth/wrong-password") {
          Alert.alert("Contraseña incorrecta");
          return;
        }
        if (error.code === "auth/internal-error") {
          Alert.alert("Correo no registrado");
          return;
        }
      });
  };
  return (
    <SafeAreaView>
      <Text style={Styles.title}>Iniciar Sesion</Text>
      <View style="imageContainer">
        <Image
          style={Styles.loginImage}
          source={require("../../../assets/login.png")}
        />
      </View>
      <Input
        placeholder="Correo"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(value) => onChange(value, "email")}
      />
      <Input
        placeholder="Contraseña"
        ultimaBox="true"
        onChangeText={(value) => onChange(value, "password")}
        secureTextEntry
      />
      <Boton style={Styles.boton} onPress={onSubmit}>
        Confirmar
      </Boton>
      <Text style={Styles.contenedorTexto}>
        ¿No tienes cuenta?{" "}
        <Text
          style={Styles.registro}
          onPress={() => navigation.navigate("SignUp")}
        >
          Regístrate
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default SignIn;
