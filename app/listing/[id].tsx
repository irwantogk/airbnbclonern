import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Detail() {
    const { id } = useLocalSearchParams<{id: string}>();
    console.log("ID ====>", id);
    return (
        <View>
            <Text>Detail</Text>
        </View>
    )
}