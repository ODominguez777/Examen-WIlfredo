import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../../../components/Button/';
import Styles from "./Styles";

const OnBoarding = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={Styles.imageContainer}>
        <Image
          source={require("../../../assets/user.png")}
          style={Styles.image}
        />
      </View>
      <View>
        <Text style={Styles.title}>
          Bienvenid@ a tu aplicación de inventario favorita
        </Text>
        <Button type='green' onPress={()=> navigation.navigate('SignIn')}>Iniciar Sesion</Button>
        <Button onPress={()=> navigation.navigate('SignUp')}>Registrarse</Button>
      </View>
      <View >
        <Text style={Styles.textContainer}>
          ¿Necesitas ayuda? <Text style={Styles.contact}>Contáctanos</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
