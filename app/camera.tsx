import { FontAwesome6 } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} 
      barcodeScannerSettings={{
        barcodeTypes: ["qr"]
      }}
      onBarcodeScanned={(scanningResult)=>{
        console.log(scanningResult.data);
      }}
      facing={facing}>
        <View style={styles.buttonContainer}>
        </View>
      </CameraView>
        <View style={styles.container1}>
          <TouchableOpacity style={styles.button1} onPress={toggleCameraFacing}>
                <FontAwesome6 name="camera-rotate" size={50} color="black" />
            </TouchableOpacity>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container1:{
    backgroundColor: 'white',
    minHeight: 150,
  },
  button1:{
    marginTop: 30,
    marginLeft: '40%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    marginTop: -75,
    width: '100%',
    height: '90%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});