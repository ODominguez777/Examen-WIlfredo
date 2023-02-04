import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
export default Styles = StyleSheet.create({
  boton: {
    alignSelf: "center",
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.darkGrey,
    marginTop: 30,
    marginBottom: 10,
  },
  textoBoton: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
});
