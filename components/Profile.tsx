import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    minHeight: 100,
    marginHorizontal: 20,
    backgroundColor:'white',
    borderRadius: 10,
    borderWidth: 1,
  },
  tempHeight: {
    flex: 1,
    minHeight: 90,
  },
  profileImage: {
    flex: 1,
  },
  imageContainer: {
    maxWidth: "30%",
  },
  infoContainer: {
    padding: 10,
    paddingTop: 15,
  },
  nameStyle: {
    fontSize: 20,
  },
  designationStyle: {
    fontSize: 15
  }
});

const Profile = () => {
  return (
    <View style={styles.container}> 
      <View style={[styles.imageContainer, styles.tempHeight]}>
        <Image 
          style={styles.profileImage}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
        />
      </View>
      <View style={[styles.infoContainer, styles.tempHeight]}>
        <Text style={styles.nameStyle}>Anthony Yolach Lloveras</Text>
        <Text style={styles.designationStyle}>Senior Developer</Text>
      </View>
    </View>
  );
};

export default Profile;
