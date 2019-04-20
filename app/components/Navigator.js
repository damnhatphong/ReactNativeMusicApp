
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";
import  HomeScreen  from '../screens/Homescreen';
import Categories from '../screens/Categories';
import Playlist from '../screens/Playlist';
import PlayScreen from '../screens/PlayScreen/PlayScreen'

/*const StackNavigator = createStackNavigator({
  PlayScreen: PlayScreen,
});*/

const TabNavigator = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Categories: Categories,
  Playlist:Playlist,
  PlayScreen: {
    screen: PlayScreen,
    navigationOptions:{
      tabBarVisible: false,
      header:null,
    },
    headerMode:'none',
    header:null, 
  }
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




export default createAppContainer(TabNavigator);