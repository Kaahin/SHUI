import * as React from "react";
import Signin from "./components/signin";
import Signup from "./components/signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signin"
          component={Signin}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
