import React from "react";
import { View, Text } from "react-native";

export default function BadComponent2(props) {
  return (
    <View>
      <View>
        <Text>Favorite colors</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <View>
            <Text>Red</Text>
          </View>
          <View>
            <Text>Orange</Text>
          </View>
          <View>
            <Text>Blue</Text>
          </View>
        </View>
      </View>
      <Text>Cameron i welcome your ideas here</Text>
    </View>
  );
}
