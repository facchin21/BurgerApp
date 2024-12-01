import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconBurger } from '../components/IconBurger'
import { ListItem } from '@/components/ListItem';
import { Search } from '@/components/Search';
import { Text, View } from "react-native";
import React from "react";

export default function Page() {
  return (
    <View className="flex flex-1 bg-primary">
      <Navbar />
      <Content />
    </View>
  );
}

function Content() {
  return (
    <View className="flex-1">
      <Search/>
      {/* <ListItem/> */}
    </View>
  );
}

function Navbar() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}
      className="flex-row items-center justify-between mt-2 px-6">

      <Icon name="menu"
        size={30}
        color="#FFBB4D" />
      <View className='flex-row items-center justify-center gap-2'>
        <IconBurger />
        <Text className="text-secondary font-bold text-3xl">
          BurgerApp
        </Text>
      </View>
      <Icon name="view-grid-outline"
        size={30}
        color="#FFBB4D" />
    </View >
  );
}
