import * as React from 'react';
import {Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DetailsScreen,
  LocationScreen,
  NotificationSettings,
  ProfileScreen,
  SettingsScreen,
  ThemeSettings,
} from './screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// export const config = {
//   screens: {
//     Home: {
//       screens: {
//         Location: {
//           path: 'location/:name',
//           parse: {
//             name: name => `visiting- ${name}`,
//           },
//         },
//         Details: {
//           path: 'details/:product/:name',
//           parse: {
//             product: product => `visiting- ${product}`,
//           },
//         },
//       },
//     },
//     Profile: {
//       path: 'profile/:id',
//       parse: {
//         id: id => `user-${id}`,
//       },
//     },
//     Settings: 'settings',
//   },
// };

export const config = {
  screens: {
    Theme: 'theme',
    Notification: {
      screens: {
        Location: {
          path: 'location/name',
        },
        Details: {
          path: 'details',
        },
      },
    },
  },
};

const linking = {
  prefixes: ['demo://app'],
  config,
};

function SettingsTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Theme" component={ThemeSettings} />
      <Tab.Screen name="Notification" component={HomeStack} />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeStack} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function Route() {
  return (
    <NavigationContainer linking={linking}>
      <SettingsTab />
    </NavigationContainer>
  );
}

export default Route;
