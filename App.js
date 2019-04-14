import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
// import AnnotateScreen from './screens/Annotate';
import HomeScreen from './screens/Home';
import CreateScreen from './screens/Create';
import UserProfileScreen from './screens/UserProfile';
import TabScreen from './screens/Tab';
import ArtistProfileScreen from './screens/ArtistProfile';

/* Stack navigators for each screen */

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null, // disables back button to screen - might be problem later
      gesturesEnabled: false, // disables user swiping back to previous screen
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
      headerBackTitle: null, // removes truncated 'Back' text from header when on Tab screen
    }),
  },
  Tab: {
    screen: TabScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
      headerTintColor: '#fff', // color of back arrow
      headerLeftContainerStyle: {
        // style for back button container
        paddingLeft: 10,
      },
    }),
  },
  ArtistProfile: {
    screen: ArtistProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
      headerTintColor: '#fff', // color of back arrow
      headerLeftContainerStyle: {
        // style for back button container
        paddingLeft: 10,
      },
    }),
  },
});

const CreateStack = createStackNavigator({
  Create: {
    screen: CreateScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      gesturesEnabled: false,
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
    }),
  },
});

// const AnnotateStack = createStackNavigator({
//   Annotate: {
//     screen: AnnotateScreen,
//     navigationOptions: ({ navigation }) => ({
//       headerLeft: null,
//       gesturesEnabled: false,
//     }),
//   },
// });

const UserProfileStack = createStackNavigator({
  UserProfile: {
    screen: UserProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      gesturesEnabled: false,
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
    }),
  },
});

/* Stack navigator options */

HomeStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};

  navigationOptions.tabBarColor = '#FAFAFA';

  if (routeName === 'Home') {
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="home-outline" size={25} color="white" />
    );
  } else {
    // placeholder for now to ensure when going to other screens that home icon doesn't disappear
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="home-outline" size={25} color="white" />
    );
  }

  return navigationOptions;
};

CreateStack.navigationOptions = ({ navigation }) => {
  // naming will get confusing when diving deeper into react-nav options, fix this
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};

  if (routeName === 'Create') {
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons
        name="plus-circle-outline"
        size={25}
        color="white"
      />
    );
  } else {
    // placeholder for now to ensure when going to other screens that plus icon doesn't disappear
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons
        name="plus-circle-outline"
        size={25}
        color="white"
      />
    );
  }

  return navigationOptions;
};

// AnnotateStack.navigationOptions = ({ navigation }) => {
//   const { routeName } = navigation.state.routes[navigation.state.index];
//   const navigationOptions = {};

//   if (routeName === 'Annotate') {
//     navigationOptions.tabBarIcon = ({ focused }) => (
//       <MaterialCommunityIcons name="pencil" size={25} color="black" />
//     );
//   } else {
//     // placeholder for now to ensure when going to other screens that pencil icon doesn't disappear
//     navigationOptions.tabBarIcon = ({ focused }) => (
//       <MaterialCommunityIcons name="pencil" size={25} color="black" />
//     );
//   }

//   return navigationOptions;
// };

UserProfileStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};

  if (routeName === 'UserProfile') {
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="account-outline" size={25} color="white" />
    );
  } else {
    // placeholder for now to ensure when going to other screens that account icon doesn't disappear
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="account-outline" size={25} color="white" />
    );
  }

  return navigationOptions;
};

/* Bottom tab navigator */

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Create: CreateStack,
    // Annotate: AnnotateStack,
    UserProfile: UserProfileStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#1C202C',
      },
      showLabel: false,
    },
  }
);

/* App container */
const AppContainer = createAppContainer(BottomTabNavigator); // will want to use createSwitchNavigator to reset state from Authentication flow eventually

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
