import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const App = () => {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmr, setBmr] = useState(0);

  const handleCalculate = () => {
    if (!weight) {
      Alert.alert("กรุณากรอกน้ำหนักให้ครบถ้วน");
      return;
    }
    if (!height) {
      Alert.alert("กรุณากรอกความสูงให้ครบถ้วน");
      return;
    }
    if (!age) {
      Alert.alert("กรุณากรอกอายุให้ครบถ้วน");
      return;
    }
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (isNaN(w) || isNaN(h) || isNaN(a)) {
      setBmr(0);
      return;
    }

    let result = 0;
    if (gender === "male") {
      result = 66 + 13.7 * w + 5 * h - 6.8 * a;
    } else {
      result = 665 + 9.6 * w + 1.8 * h - 4.7 * a;
    }

    setBmr(Math.round(result));
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={require("@/assets/images/healthcare.jpg")}
          style={styles.headerBackground}
          imageStyle={styles.headerImage}
        >
          <View style={styles.headerOverlay}>
            <Text style={styles.headerTitle}>BMR Calculator</Text>
            <Text style={styles.headerSubtitle}>
              อัตราการเผาผลาญพลังงานขั้นพื้นฐานของร่างกาย
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.formContainer}>
          <Text style={styles.label}>เพศ (Gender)</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === "male" && styles.genderButtonSelected,
              ]}
              onPress={() => setGender("male")}
              activeOpacity={0.8}
            >
              <View style={styles.iconCircle}>
                <Image
                  source={require("@/assets/images/man.png")}
                  style={styles.genderIcon}
                />
              </View>
              <Text
                style={[
                  styles.genderText,
                  gender === "male" && styles.genderTextSelected,
                ]}
              >
                ชาย
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === "female" && styles.genderButtonSelected,
              ]}
              onPress={() => setGender("female")}
              activeOpacity={0.8}
            >
              <View style={[styles.iconCircle, styles.iconCircleFemale]}>
                <Image
                  source={require("@/assets/images/woman.png")}
                  style={styles.genderIcon}
                />
              </View>
              <Text
                style={[
                  styles.genderText,
                  gender === "female" && styles.genderTextSelected,
                ]}
              >
                หญิง
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>น้ำหนัก (kg)</Text>
              <TextInput
                style={styles.input}
                placeholder="เช่น 60"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>ส่วนสูง (cm)</Text>
              <TextInput
                style={styles.input}
                placeholder="เช่น 170"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
              />
            </View>
          </View>

          <View style={styles.inputGroupFull}>
            <Text style={styles.label}>อายุ (ปี)</Text>
            <TextInput
              style={styles.input}
              placeholder="เช่น 25"
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
            />
          </View>

          <TouchableOpacity
            style={styles.calculateButton}
            onPress={handleCalculate}
            activeOpacity={0.8}
          >
            <Text style={styles.calculateButtonText}>คำนวณหาค่า BMR</Text>
          </TouchableOpacity>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>BMR ของคุณคือ</Text>
            <Text style={styles.resultValue}>{bmr}</Text>
            <Text style={styles.resultUnit}>แคลอรี่ / วัน</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  headerBackground: {
    width: "100%",
    height: 220,
    justifyContent: "center",
  },
  headerImage: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#E0E0E0",
  },
  formContainer: {
    padding: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  genderButton: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: "transparent",
  },
  genderButtonSelected: {
    borderColor: "#F48FB1",
    backgroundColor: "#FFF0F5",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E3F2FD",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  iconCircleFemale: {
    backgroundColor: "#FFF3E0",
  },
  genderIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  genderText: {
    fontSize: 16,
    color: "#888",
    fontWeight: "bold",
  },
  genderTextSelected: {
    color: "#E91E63",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  inputGroup: {
    width: "48%",
  },
  inputGroupFull: {
    width: "100%",
    marginBottom: 25,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  calculateButton: {
    backgroundColor: "#F06292",
    borderRadius: 15,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 25,
    shadowColor: "#F06292",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  calculateButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  resultValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#F06292",
    marginBottom: 5,
  },
  resultUnit: {
    fontSize: 16,
    color: "#9E9E9E",
  },
});

export default App;
