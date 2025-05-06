import { View } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listing from '@/components/Listing'

export default function Index() {
  const [category, setCategory] = useState("Tiny House")
  const onDataChanged = (category: string) => {
    setCategory(category);
  }

  return (
    <View style={{flex: 1}}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />
        }}
      />
      <Listing listing={[]} category={category} />
    </View>
  )
}