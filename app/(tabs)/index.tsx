import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View>
      <Link href={'/(modals)/login'}>Login</Link>
      <Link href={'/(modals)/booking'}>Bookings</Link>
      <Link href={'/listing/1234'}>Listing Detail Page</Link>
    </View>
  )
}