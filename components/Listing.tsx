import { View, Text, FlatList, StyleSheet, ListRenderItem, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { defaultStyle } from '@/constants/Style';
import { Link } from 'expo-router';
import { IListing } from '@/interfaces/listing';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInLeft, FadeInRight, FadeOutLeft } from 'react-native-reanimated';

interface Props {
  listing: any[];
  category: string;
}

export default function Listing({ listing: items, category}: Props) {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log("Reload listing -", items.length);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<IListing> = ({item}) => (
    // classic problem if we use component inside link expo router (content not appear), should make as child by use asChild
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}>
          <Image source={{uri: item.medium_url}} style={styles.image} />
          <TouchableOpacity style={{position: "absolute", right: 30, top: 30}}>
            <Ionicons name="heart-outline" size={24} color={"#000"} />
          </TouchableOpacity>

          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: 16, fontFamily: "mon-sb"}}>{item.name}</Text>
            <View style={{flexDirection: "row", gap: 4}}>
              <Ionicons name="star" size={16} />
              <Text style={{fontFamily: "mon-sb"}}>{item.review_scores_rating / 20}</Text>
            </View>
          </View>

          <Text style={{fontFamily: "mon"}}>{item.room_type}</Text>

          <View style={{flexDirection: "row", gap: 4}}>
            <Text style={{fontFamily: "mon-sb"}}>${item.price}</Text>
            <Text style={{fontFamily: "mon"}}>/</Text>
            <Text style={{fontFamily: "mon"}}>night</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  )

  return (
    <View style={defaultStyle.container}>
      <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : items}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  }
});