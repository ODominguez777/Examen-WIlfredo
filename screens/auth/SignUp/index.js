import React, { useState } from "react";
import {
  Alert,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../../../components/Input";
import Styles from "./Styles";
import Boton from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import Terminos from "../../../constants/Terminos";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirebaseApp } from "../../../utils/firebaseHelper";

const SignUp = ({ navigation }) => {
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
  });
  console.log(values);
  const onLinkPress = (url) => {
    Linking.openURL(url);
  };
  const onChange = (value, key) => {
    setValues({
      ...values,
      [key]: value,
    });
  };
  const onSubmit = () => {
    if (!agreed) {
      Alert.alert("Aviso", "Acepte los términos y condiciones");
      return;
    }
    if (
      !values.name ||
      !values.businessName ||
      !values.confirmPassword ||
      !values.email ||
      !values.password
    ) {
      Alert.alert("Aviso", "Por favor rellene todos los campos");
      return;
    }
    if (values.password !== values.confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    // Initialize Firebase
    const app = getFirebaseApp();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: `${values.name}`,
          businessName: `${values.businessName}`
          
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Aviso", "El correo ya está en uso ");
        }
        if (error.code === "auth/invalid-email") {
          Alert.alert("Aviso", "Correo no valido ");
        }
        console.log(error.code);
      });
  };
  return (
    <SafeAreaView>
      <Text style={Styles.titulo}>Regístrate</Text>
      <View style={Styles.imageContainer}>
        <Image
          source={require("../../../assets/register.png")}
          style={Styles.image}
        />
      </View>
      <View>
        <InputBox
          placeholder="Nombre"
          onChangeText={(text) => onChange(text, "name")}
        ></InputBox>
        <InputBox
          placeholder="Correo"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => onChange(text, "email")}
        ></InputBox>
        <InputBox
          placeholder="Contraseña"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text) => onChange(text, "password")}
        ></InputBox>
        <InputBox
          placeholder="Confirmar contraseña"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text) => onChange(text, "confirmPassword")}
        ></InputBox>
        <InputBox
          placeholder="Nombre del negocio"
          onChangeText={(text) => onChange(text, "businessName")}
        ></InputBox>
      </View>
      <View style={Styles.row}>
        <Checkbox checked={agreed} onPress={() => setAgreed(!agreed)} />

        <Text style={Styles.agreeText}>
          Estoy de acuerdo con los{" "}
          <Text
            style={Styles.linkText}
            onPress={() => onLinkPress(Terminos.terminosYCondiciones)}
          >
            términos y condiciones
          </Text>
          <Text
            style={Styles.linkText}
            onPress={() => onLinkPress(Terminos.politicaPrivaciad)}
          >
            {" "}
            y políticas de privacidad
          </Text>{" "}
        </Text>
      </View>
      <View>
        <Boton type="green" onPress={() => onSubmit()}>
          Registrarse
        </Boton>
      </View>
      <View style={Styles.footer}>
        <Text style={Styles.footerText}>
          ¿Ya tienes cuenta?{" "}
          <Text
            style={Styles.linkText}
            onPress={() => navigation.navigate("SignIn")}
          >
            Inicia Sesión
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
