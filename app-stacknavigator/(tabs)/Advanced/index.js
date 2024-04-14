import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Advanced() {
  return (
    <View>
      <Button title="go to dynamicui page" onPress={()=>router.push('/Advanced/Dynamicui')}/>
      <Button title="go to forms page" onPress={()=>router.push('/Advanced/Forms')}/>
      <Button title="go to list page" onPress={()=>router.push('/Advanced/List')}/>
    </View>
  )
}

const styles = StyleSheet.create({})