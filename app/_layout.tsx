import { Stack } from "expo-router";

export default function RootLayout() {
  return (<Stack initialRouteName="index">
            <Stack.Screen name="index" />
            <Stack.Screen name="food" />
            <Stack.Screen name="workout" />
            <Stack.Screen name="stats" />
          </Stack>
  );
}
