import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'nativewind';
import Icon from '@/components/ui/ThemeIcon';
import { getThemeColor } from '@/constants/Colors';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        sceneStyle: { backgroundColor: getThemeColor(colorScheme).background, paddingHorizontal: 16 },
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          elevation: 0,
          borderColor: getThemeColor(colorScheme).gray,
          backgroundColor: getThemeColor(colorScheme).background,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, size }) => <Icon type='Ionicons' name='home' size={size} color={focused ? getThemeColor(colorScheme).tabBarIcon : "gray"} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, size }) => <Icon type='FontAwesome' name='user' size={size} color={focused ? getThemeColor(colorScheme).tabBarIcon : "gray"} />,
        }}
      />

    </Tabs>
  );
}



