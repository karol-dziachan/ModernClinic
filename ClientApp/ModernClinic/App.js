import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/Views/HomePage/HomePage';
import Menu from './src/Components/Menu/Menu';
export default function App() {
  return (
    <View style={styles.container}>
      <Menu></Menu>
      <HomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
