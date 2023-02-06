import React from 'react'
import { View, Text } from 'react-native'

export default function BadComponent3({ text, status = false }) {
  return (
    <View>
      <Text>{status ? 'Loading...' : text}</Text>
    </View>
  )
}
