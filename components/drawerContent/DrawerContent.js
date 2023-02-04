import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Text } from 'react-native'
import { getFirebaseApp } from '../../utils/firebaseHelper'
import { getAuth, signOut } from 'firebase/auth'
const DrawerContent = (props) => {
    const logOut = () =>{
        const app = getFirebaseApp();
        const auth = getAuth(app);
        signOut(auth).then(()=> {

        }).catch((error)=>{
            
        })
    }
  return (
    <DrawerContentScrollView {...props}>
        <Text style={{marginLeft: 10}} onPress={logOut}>Cerrar Sesion</Text>
    </DrawerContentScrollView>
  )
}

export default DrawerContent