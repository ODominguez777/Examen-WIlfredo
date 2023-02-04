import React from "react";
import Styles from "./Styles";
import { TouchableOpacity, Text } from "react-native";
import Colors from "../../constants/Colors";
const Button = (props) => {
  return (
    <TouchableOpacity style={[Styles.boton, props.type === 'green' && {backgroundColor: Colors.lightGreen}]}  {...props}>
      <Text style={Styles.textoBoton}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
