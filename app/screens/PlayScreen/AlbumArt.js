import React,{Component} from 'react';
import {StyleSheet,Image,View,TouchableOpacity} from 'react-native';

export default class AlbumArt extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri:this.props.url}}/>
                </TouchableOpacity>                
            </View>
        );
    };
}


const styles = StyleSheet.create({   
    image:{
        width:'80%',
        borderWidth:1,
        borderColor:'#7e7e7f',
        marginLeft: '10%',
        height: 300,
    }
});