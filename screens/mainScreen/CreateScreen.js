import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreateScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    navigation.navigate("DefaultScreen", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 150, width: 150 }}
            />
          </View>
        )}
        <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View>
        <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
          <Text style={styles.sendLabel}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    marginHorizontal: 2,
    marginTop: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 40,
    borderWidth: 2,
    borderColor: "#20b2aa",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: {
    color: "#20b2aa",
    fontSize: 20,
  },
});

export default CreateScreen;
