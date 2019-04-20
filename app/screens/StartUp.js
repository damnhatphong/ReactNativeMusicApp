import React,{Component} from'react';

import AppNavigation from './AppNavigation';
import {createAppContainer} from 'react-navigation';
const AppNavigations = createAppContainer(AppNavigation);

export default class App extends Component{
  render(){
      return (
        <AppNavigations/>
      );
  }
}


