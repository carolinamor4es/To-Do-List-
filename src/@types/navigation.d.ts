import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Task } from './index';

export type RootStackParamList = {
  Home: undefined;
  'Create Task': { task?: Task}; 
  'Task List': undefined;
};

export type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

