import { View, Text } from 'react-native'
import React from 'react'

const Greet = ({name}) => {
  return (
    <View>
      <Text>this is a example of {name}</Text>
    </View>
  )
}

export default Greet