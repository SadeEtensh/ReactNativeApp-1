import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import AppPro from './AppPro';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#FFF'}}>Red</Text>
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'lightgreen',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#FFF'}}>Green</Text>
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#FFF'}}>Blue</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default App;
