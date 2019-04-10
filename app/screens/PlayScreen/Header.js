import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default class Header extends Component{
    render(){
        return(
            <View style={styles.topMenu}>
                <TouchableOpacity>
                    <Icon color='white' size={30} name='chevron-left'/>
                </TouchableOpacity>
                <Text style={styles.topMenuIcon}>Music Icon</Text>    
                <TouchableOpacity>          
                    <Icon color='white' size={30} name='menu'/>
                </TouchableOpacity>      
            </View>     
        );
    }
} 


const styles = StyleSheet.create({    
    topMenu:{
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:15,
    },
    topMenuIcon:{
        fontSize: 26,
        color:'white',
    },
    album:{
        flexDirection:'row',
    },
   
});