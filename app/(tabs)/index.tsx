import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import Listing from '@/components/Listing';
import listingData from "@/assets/data/airbnb-listings.json";

export default function Index() {
  const [category, setCategory] = useState("Tiny House");

  const items = useMemo(() => listingData as any, []);

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
      <Listing listing={items} category={category} />
    </View>
  )
}