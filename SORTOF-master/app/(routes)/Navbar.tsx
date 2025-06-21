import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
export default function Navbar() {
  return (
    <View>
      <Link href="/(tabs)/Profile/page">
        <Text style={{ color: 'blue', fontSize: 20 }}>Go to Profile</Text>
      </Link>
      <Link href="/(tabs)/Flash/page">
        <Text style={{ color: 'blue', fontSize: 20 }}>Go to Settings</Text>
      </Link>
      <Link href="/(tabs)/Notes/page">
        <Text style={{ color: 'blue', fontSize: 20 }}>Go to Home</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({})