import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';

import Colors from '@/constants/Colors';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle: {
        fontFamily: 'mon-sb'
      }
    }}>
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => <Ionicons name='search' color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name='whistlist'
        options={{
          tabBarLabel: 'Whistlist',
          tabBarIcon: ({ color, size }) => <Ionicons name='heart-outline' color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name='trips'
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name='airbnb' color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name='inbox'
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='message-outline' color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name='person-circle-outline' color={color} size={size} />
        }}
      />
    </Tabs>
  );
}
