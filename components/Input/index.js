import React from "react";
import { TextInput } from "react-native";
import Colors from "../../constants/Colors";
import styles from "./styles";
const Input = (props) => {
  return (
    <TextInput
      style={[
        styles.input,
        props.ultimaBox === "true" && { marginTop: 35 },
        props.confirmar === "true" && {
          marginTop: 60,
          backgroundColor: Colors.lightGreen,
        },
      ]}
      {...props}
      placeholderTextColor="#000000"
      
    />
  );
};

export default Input;
