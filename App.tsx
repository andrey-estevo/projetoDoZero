import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import "./global.css";
import { Profile } from '@/app/Profile';

export default function App() {
  return (
    <>
      <Profile />
      <StatusBar style="light" />
    </>
  );
}
