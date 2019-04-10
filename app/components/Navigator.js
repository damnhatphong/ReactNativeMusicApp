
import { createAppContainer, createMaterialTopTabNavigator, createSwitchNavigator } from "react-navigation";
import  HomeScreen  from '../screens/Homescreen';
import Categories from '../screens/Categories';
import Playlist from '../screens/Playlist';

const AppNavigator = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Categories: Categories,
  Playlist:Playlist,
},
{
  initialRouteName:'Playlist',
  swipeEnabled: true,
  tabBarOptions: {
    labelStyle: {
      fontSize: 11,
      color:'black',
    },
    style: {
      backgroundColor: 'white',
    },
  }
}
);
export default createAppContainer(AppNavigator);