import React from 'react';
import { View, Text, Button, Image, Linking } from 'react-native';

export default function BadComponent2(props) {
  return (
    <View
      style={{
        marginVertical: 100,
        maxWidth: 500,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingVertical: 24,
      }}
    >
      <Text style={{ fontWeight: 'bold' }}>Component 2</Text>
      <Text>
        1. Fetch list of all supported LunarCrush crypto assets (done)
      </Text>
      <Text>
        2. Fetch the meta data for the first 3 listed assets. Should display
        BTC, ETH, and XRP
      </Text>
      <Text>3. Create a list of all social channel links.</Text>
      <Text>
        4. Fix any related console errors and warnings. Ensure code works on web
        and native devices
      </Text>
      <MetaDataComponent />
    </View>
  );
}

const MetaDataComponent = () => {
  const [status, setStatus] = React.useState('loading');
  const [data, setData] = React.useState([]);

  const getData = async () => {
    setStatus('loading');

    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch('https://lunarcrush.com/api3/coins/list').then(
        (res) => res.json()
      );
      Promise.all(
        res.data.slice(0, 3).map((asset) => {
          const meta = fetch(`https://lunarcrush.com/api3/coins/eth/meta`).then(
            (res) => res.json()
          );
          return meta || {};
        })
      ).then((values) => {
        setData(values);
        setStatus('fresh');
      });
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return status === 'loading' ? (
    <Text>Loading...</Text>
  ) : (
    <>
      <View style={{ height: 24 }} />
      {data.map((asset) => (
        <>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: '#000aaa33',
              justifyContent: 'space-between',
              paddingVertical: 8,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={{ uri: asset.data.image }}
                style={{
                  height: 40,
                  width: 40,
                  marginRight: 4,
                }}
              />
              <View>
                <Text>{asset.data.name}</Text>
                <Text>{asset.data.symbol}</Text>
              </View>
            </View>
            <View>
              {/* list of ALL social channel links go here. Ignore null values */}
              {/* example button below */}
              <View style={{ marginBottom: 4 }}>
                <Button
                  onPress={() => Linking.openURL(asset.data.github_link)}
                  title={asset.data.github_link}
                />
              </View>
            </View>
          </View>
        </>
      ))}
    </>
  );
};
