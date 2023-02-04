import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export default Styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 15,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 10 
  },
  image: {},
  containerInputs: {},
  input: {},
  button: {},
  footer: {
    alignItems: "center",
    
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  linkText:{
    color:'blue',
    textDecorationLine: "underline"
  },
  agreeText:{
    fontSize: 12,
    marginLeft: 8
  },
  row:{
      flexDirection: 'row',
      alignSelf: "center",
      width: 300,
      marginTop: 10
  }
});
