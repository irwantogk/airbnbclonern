import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import lisitngData from "@/assets/data/airbnb-listings.json";
import Animated, { SlideInDown } from 'react-native-reanimated';
import { IListing } from '@/interfaces/listing';
import { Ionicons } from '@expo/vector-icons';
import { defaultStyle } from '@/constants/Style';
import Colors from '@/constants/Colors';

const IMG_HEIGHT = 300;
const { width } = Dimensions.get('window');

export default function Detail() {
    const { id } = useLocalSearchParams<{id: string}>();
    const listing: IListing = (lisitngData as any[]).find((item) => item.id === id);

    return (
        <View style={styles.container}>
            <Animated.ScrollView
                contentContainerStyle={{paddingBottom: 100}}
                scrollEventThrottle={16}
            >
                <Animated.Image source={{uri: listing.xl_picture_url }} style={styles.image} />

                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{listing.name}</Text>
                    <Text style={styles.location}>
                        {listing.room_type} in {listing.smart_location}
                    </Text>
                    <Text style={styles.rooms}>
                        {listing.guests_included} guests · {listing.bedrooms} · {listing.beds} bed ·{' '}
                        {listing.bathrooms} bathrooms 
                    </Text>
                    <View style={{flexDirection: 'row', gap: 4}}>
                        <Ionicons name='star' size={16} />
                        <Text style={styles.ratings}>
                            {listing.review_scores_rating / 20} · {listing.number_of_reviews} reviews
                        </Text>
                    </View>
                    <View  style={styles.devider} />

                    <View style={styles.hostView}>
                        <Image source={{uri: listing.host_picture_url}} style={styles.host} />

                        <View>
                            <Text style={{ fontWeight: '500', fontSize: 16 }}>Hosted by {listing.host_name}</Text>
                            <Text>Host since {listing.host_since}</Text>
                        </View>

                    </View>
                    <View style={styles.devider} />

                    <Text style={styles.description}>{listing.description}</Text>
                </View>
            </Animated.ScrollView>

            <Animated.View style={defaultStyle.footer} entering={SlideInDown.delay(20)}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity style={styles.footerText}>
                        <Text style={styles.footerPrice}>${listing.price}</Text>
                        <Text>night</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[defaultStyle.btn, {paddingRight: 20, paddingLeft: 20}]}>
                        <Text style={defaultStyle.btnText}>Reserve</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        height: IMG_HEIGHT,
        width, 
    },
    infoContainer: {
        padding: 24,
        backgroundColor: '#fff',
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'mon-sb'
    },
    location: {
        fontSize: 18,
        marginTop: 10,
        fontFamily: 'mon-sb',
    },
    rooms: {
        fontSize: 16,
        color: Colors.grey,
        marginVertical: 4,
        fontFamily: 'mon'
    },
    ratings: {
        fontSize: 16,
        fontFamily: 'mon-sb',
    },
    devider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.grey,
        marginVertical: 16,
    },
    host: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: Colors.grey,
    },
    hostView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    footerText: {
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    footerPrice: {
        fontSize: 18,
        fontFamily: 'mon-sb',
    },
    roundBotton: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.primary,
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    header: {
        backgroundColor: '#fff',
        height: 100,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'mon-sb'
    }
});