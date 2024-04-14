import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
export default function Basic() {
  return (
    <View>
      <Button title="go to core page" onPress={()=>router.push('/Basic/Corecomponent')}/>
      <Button title="go to styles page" onPress={()=>router.push('/Basic/Styles')}/>
    </View>
  )
}

const styles = StyleSheet.create({})