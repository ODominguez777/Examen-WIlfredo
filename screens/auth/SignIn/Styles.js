import { StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";
export default Styles = StyleSheet.create({
    loginImage:{
        alignSelf: "center",
        marginTop: 30
    },
    imageContainer:{

    },
    title:{
        fontSize: 20,
        alignSelf: "center",
        color: '#000000',
        fontWeight: "bold",
        marginTop: 10 
    },
    contenedorTexto:{
        marginTop: 30,
        fontSize: 20,
        fontWeight: "bold",
        color: '#000000',
        alignSelf: "center"

    },
    registro:{
        color: 'blue'
    },
    boton:{
        backgroundColor: Colors.lightGreen,
        alignSelf: "center",
        width: 200,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 10,
    }
})