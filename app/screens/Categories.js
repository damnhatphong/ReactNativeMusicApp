import React,{Component} from "react";
import { StyleSheet,View,Image,ImageBackground} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Categories extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.blockcontent}>
                    <TouchableOpacity>
                        <ImageBackground  source={require('../assets/img/ukmusic.png')} style={styles.categoryblock}>
                            <View style={styles.overlay}>
                                <Image style={styles.categorytitle} source={require('../assets/img/ukmusicicon-64.png')}></Image>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground  source={require('../assets/img/ukmusic.png')} style={styles.categoryblock}>
                            <View style={styles.overlay}>
                                <Image style={styles.categorytitle} source={require('../assets/img/usmusicicon-64.png')}></Image>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.blockcontent}>
                    <TouchableOpacity>
                        <ImageBackground  source={require('../assets/img/ukmusic.png')} style={styles.categoryblock}>
                            <View style={styles.overlay}>
                                <Image style={styles.categorytitle} source={require('../assets/img/vnmusicicon-64.png')}></Image>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground  source={require('../assets/img/ukmusic.png')} style={styles.categoryblock}>
                            <View style={styles.overlay}>
                                <Image style={styles.categorytitle} source={require('../assets/img/koreanmusicicon-64.png')}></Image>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    blockcontent:{
        marginTop:25,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    categoryblock:{
       width: 150,
       height: 150,
       justifyContent:'center',
       alignItems: 'center',
    },
    overlay:{
        width: 150,
        height: 150,
        backgroundColor:'rgba(0,0,0,.5)',
        justifyContent:'center',
        alignItems: 'center',
    },
    categorytitle:{
        opacity: 0.7,
    },
    image:{
        width:100,
        height:100,
    },
});