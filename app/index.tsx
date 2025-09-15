import { NativeModules, Text, View } from "react-native";

const { BatteryModule} = NativeModules;


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Battery Level: {BatteryModule.getBatteryLevel()}</Text>
    </View>
  );
}
