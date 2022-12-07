import React from "react";
import { View, Text } from "react-native";

export default function BadComponent1(props) {
  const [status, setStatus] = React.useState("loading");
  const [data, setData] = React.useState({});

  const getData = async () => {
    setStatus("loading");
    const res = await fetch("https://lunarcrush.com/api3/coinoftheday").then(
      (res) => res.json()
    );
    setData(res);
    setStatus("fresh");
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {status === "loading" ? (
        <Text>Loading...</Text>
      ) : (
        <Text>
          LunarCrush coin of the day is {data.name} ({data.symbol})
        </Text>
      )}
    </View>
  );
}
