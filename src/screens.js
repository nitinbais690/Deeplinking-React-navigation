import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Pressable as RNPressable, Text as RNText} from 'react-native';

export function Pressable() {
  const {goBack, canGoBack} = useNavigation();
  return (
    <RNPressable
      onPress={() => canGoBack && goBack()}
      // eslint-disable-next-line react-native/no-inline-styles
      style={({pressed}) => [
        {
          height: 50,
          width: 200,
          backgroundColor: pressed ? 'purple' : 'gray',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        },
      ]}>
      <Text style={{color: 'white', fontSize: 20}}>Go back</Text>
    </RNPressable>
  );
}

export function Text({children}) {
  const {goBack} = useNavigation();
  return (
    <RNText
      onPress={() => goBack()}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
      }}>
      {children}
    </RNText>
  );
}

export function NotificationSettings() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>NotificationSettings Screen</Text>
    </View>
  );
}

export function ThemeSettings() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ThemeSettings Screen</Text>
    </View>
  );
}

export function ProfileScreen(props) {
  const params = props.route.params ?? {};
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{params?.id}</Text>
      <Pressable />
    </View>
  );
}

export function SettingsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
      <Pressable />
    </View>
  );
}

export function DetailsScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DetailsScreen props {JSON.stringify(props, null, 2)}</Text>
      <Pressable />
    </View>
  );
}

export function LocationScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> LocationScreen props {JSON.stringify(props, null, 2)}</Text>
      <Pressable />
    </View>
  );
}
