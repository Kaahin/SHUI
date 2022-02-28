import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFonts, PTSans_400Regular } from "@expo-google-fonts/pt-sans";
import AppLoading from "expo-app-loading";

export default function Signup() {
  let [fontsLoaded] = useFonts({
    PTSans_400Regular,
  });

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      User: user,
      Email: email,
      Password: password,
    });

    fetch("http://240d-188-149-22-223.ngrok.io/signup", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.Login}>
        <Image style={styles.Top} source={require("../assets/top.png")} />
        <View style={styles.Group1021}>
          {/* <View>
            <Text>
              Registrera dig nu för att bli en del av SHUI. Flow Freely today.
            </Text>
          </View> */}
          <View style={styles.Group298}>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.Txt683}
              placeholder="Användarnamn"
              placeholderTextColor="#ffff"
              value={user}
              onChangeText={setUser}
            />
          </View>
          <View style={styles.Group298}>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.Txt683}
              placeholder="Email"
              placeholderTextColor="#ffff"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.Group340}>
            <TextInput
              style={styles.Txt772}
              placeholder="Lösenord"
              placeholderTextColor="#ffff"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.Group843} onPress={onSubmit}>
            <Text style={styles.Txt485}>Registrera</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.Frame1}
          source={require("../assets/frame_1.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    color: "white",
    marginBottom: 40,
    fontFamily: "PTSans_400Regular",
    fontStyle: "italic",
  },
  Login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(25,39,74,1)",
    width: 411,
    height: 823,
  },
  Group1021: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 6,
  },
  Subtract: {
    width: 96,
    height: 105,
    marginBottom: 6,
  },
  Txt190: {
    fontSize: 35,
    fontFamily: "PTSans_400Regular",
    fontWeight: "700",
    letterSpacing: -1.05,
    color: "rgba(255, 255, 255, 1)",
  },
  Txt1510: {
    fontSize: 18,
    fontFamily: "PTSans_400Regular",
    fontWeight: "400",
    letterSpacing: 3.6,
    color: "rgba(0,178,255,0.8)",
    marginBottom: 80,
  },
  Group298: {
    paddingTop: 20,
    paddingBottom: 19,
    paddingLeft: 11,
    paddingRight: 22,
    marginBottom: 24,
    borderRadius: 3,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,255,255, 1)",
    width: 310,
    height: 72,
  },
  Txt683: {
    fontSize: 18,
    fontFamily: "PTSans_400Regular",
    fontWeight: "400",
    letterSpacing: 5.4,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 275,
    height: 31,
    textDecorationLine: "none",
  },
  Group340: {
    paddingTop: 20,
    paddingBottom: 19,
    paddingLeft: 47,
    paddingRight: 58,
    marginBottom: 48,
    borderRadius: 3,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,1)",
    width: 310,
    height: 72,
  },
  Txt772: {
    fontSize: 18,
    fontFamily: "PTSans_400Regular",
    fontWeight: "400",
    letterSpacing: 5.4,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 203,
    height: 31,
  },
  Group843: {
    paddingTop: 21,
    paddingBottom: 24,
    paddingLeft: 49,
    paddingRight: 56,
    marginBottom: 83,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 310,
    height: 72,
  },
  Txt485: {
    fontSize: 24,
    fontFamily: "PTSans_400Regular",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 203,
    height: 34,
  },
  Frame1: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 411,
    height: 146,
    bottom: 20,
    flex: 1,
  },
  Top: {
    width: 42,
    height: 60,
    position: "absolute",
    top: 0,
    left: 32,
  },
});
