import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

interface Props {
  listing: any[];
  category: string;
}

export default function Listing({ listing, category}: Props) {
  useEffect(() => {
    console.log("Reload listing");
  }, [category]);
  return (
    <View>
      <Text>{category}</Text>
    </View>
  )
}