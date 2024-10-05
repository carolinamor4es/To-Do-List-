import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/todolist.jpg')} 
        style={styles.image} 
      />
      <Text style={styles.title}>
        Simplify, Organize and Conquer <Text style={styles.highlight}>Your Day</Text>
      </Text>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>
          Take control of your tasks and achieve your goals. 
        </Text> 
      </View>
      <CustomButton 
        text="Let's Start!" 
        onPress={() => navigation.navigate('Task List')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 20,
  },
  highlight: {
    color: '#FF6F91',
  },
  subtitleContainer: {
    display: 'flex',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    marginBottom: 30,
    marginTop: 10,
  },
  subtitle: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
  },
  image: {
    width: '100%',
    height: 240,
    marginBottom: 5,
    borderRadius: 10,
    marginTop: -20,
  },
});