import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/bmr");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.outer}>
        <View style={styles.middle}>
          <View style={styles.inner}>
            <Image
              source={require("@/assets/images/bmr.png")}
              style={styles.imglogo}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.appname, { fontSize: 40 }]}>BMR Calculator</Text>
      <ActivityIndicator size="large" color="white" style={{ marginTop: 20 }} />
    </View>
  );
}

const SIZE = 100;

const styles = StyleSheet.create({
  appname: {
    color: "white",
    marginTop: 10,
    fontFamily: "Kanit_700Bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#F48FB1",
    alignItems: "center",
    justifyContent: "center",
  },
  outer: {
    width: SIZE + 75,
    height: SIZE + 75,
    borderRadius: (SIZE + 75) / 2,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    width: SIZE + 50,
    height: SIZE + 50,
    borderRadius: (SIZE + 50) / 2,
    backgroundColor: "rgba(255,255,255,0.35)",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: SIZE + 25,
    height: SIZE + 25,
    borderRadius: (SIZE + 25) / 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#fff",
    shadowOpacity: 0.6,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },
  imglogo: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
  },
});
