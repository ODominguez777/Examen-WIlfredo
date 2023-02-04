import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from './Styles'

const Home = () => {
  return (
    <SafeAreaView style={Styles.container}>
        <Text style={Styles.titulo}>Bienvenido a HASU!</Text>
    </SafeAreaView>
  )
}

export default Home