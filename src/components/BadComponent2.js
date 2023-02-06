import React from 'react'
import { View, Text } from 'react-native'
import BadComponent3 from './BadComponent3'

export default function BadComponent2({ text, colors }) {
  return (
    <View>
      <BadComponent3 text={text} />
      <View style={{ flexDirection: 'row' }}>
        <View>
          {colors.length &&
            colors.map((color, index) => {
              return <BadComponent3 key={index} text={color} />
            })}
        </View>
      </View>
      <Text>Cameron i welcome your ideas here</Text>
    </View>
  )
}
