import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from './screens/Home';
import CreateScreen from './screens/Create';
import AnnotateScreen from './screens/Annotate';
import UserProfileScreen from './screens/UserProfile';

/* Stack navigators for each screen */

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null, // disables back button to screen - might be problem later
      gesturesEnabled: false, // disables user swiping back to previous screen
    }),
  },
});

const CreateStack = createStackNavigator({
  Create: {
    screen: CreateScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      gesturesEnabled: false,
    }),
  },
});

const AnnotateStack = createStackNavigator({
  Annotate: {
    screen: AnnotateScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      gesturesEnabled: false,
    }),
  },
});

const UserProfileStack = createStackNavigator({
  UserProfile: {
    screen: UserProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      gesturesEnabled: false,
    }),
  },
});

/* Stack navigator options */

HomeStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};

  if (routeName === 'Home') {
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="home" size={25} color="black" />
    );
  } else {
    // placeholder for now to ensure when going to other screens that home icon doesn't disappear
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="home" size={25} color="black" />
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
      <MaterialCommunityIcons name="file" size={25} color="black" />
    );
  } else {
    // placeholder for now to ensure when going to other screens that file icon doesn't disappear
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="file" size={25} color="black" />
    );
  }

  return navigationOptions;
};

AnnotateStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};

  if (routeName === 'Annotate') {
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="pencil" size={25} color="black" />
    );
  } else {
    // placeholder for now to ensure when going to other screens that pencil icon doesn't disappear
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="pencil" size={25} color="black" />
    );
  }

  return navigationOptions;
};

UserProfileStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};

  if (routeName === 'UserProfile') {
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="account" size={25} color="black" />
    );
  } else {
    // placeholder for now to ensure when going to other screens that account icon doesn't disappear
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="account" size={25} color="black" />
    );
  }

  return navigationOptions;
};

/* Bottom tab navigator */

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Create: CreateStack,
    Annotate: AnnotateStack,
    UserProfile: UserProfileStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
    },
  }
);

/* App container */
const AppContainer = createAppContainer(TabNavigator); // will want to use createSwitchNavigator to reset state from Authentication flow eventually

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
