import React from 'react'
import { Pressable, View } from 'react-native'
import Styles from './Styles'

const Checkbox = (props) => {
  return (
    <Pressable style={Styles.container} {...props}>
      {props.checked && <View style={Styles.innerSquare}/>  }
      
    </Pressable>
  )
}

export default Checkbox