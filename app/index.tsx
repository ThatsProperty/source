import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your own Property Podcast</Text>
      <Text style={styles.text}>Coming very, very soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Black background
  },
  text: {
    color: '#ffffff', // White text
    fontSize: 35,
    fontFamily: 'System', // Default system font, you can use custom fonts too
    textAlign: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 80,
    color: '#ffffff', // White text
    marginBottom: 20,
    fontFamily: 'System', // Default system font, use a custom font if needed
    textAlign: 'center',
  },
  link: {
    color: '#1DA1F2', // Blue link color similar to X (formerly Twitter)
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
