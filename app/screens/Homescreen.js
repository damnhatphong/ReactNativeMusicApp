import React,{Component} from "react";
import { StyleSheet,View, Text , Image, ScrollView,ImageBackground} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default class HomeScreen extends Component {
    render(){
        return (
            <ScrollView>
                 <View style={styles.header} >
                <ImageBackground  style={styles.headermenu} source={require('../assets/img/headerbackground.jpg')}>
                    <View style={styles.overlay}>
                        <Text style={styles.title}>Music App</Text>    
                    </View>          
                </ImageBackground>    
                </View>
               <View style={styles.blockcontent}>
                    <Text style={styles.blocktitle}>What should I hear today?</Text>
                   <View style={styles.imagecontainer}>
                        <TouchableOpacity>
                            <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                            <Text style={styles.collectiontitle}>Collection Title</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                            <Text style={styles.collectiontitle}>Collection Title</Text>
                        </TouchableOpacity>
                       
                        <TouchableOpacity>
                            <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                            <Text style={styles.collectiontitle}>Collection Title</Text>
                        </TouchableOpacity>                                              
                   </View>
               </View>
               <View style={styles.blockcontent}>
                   <Text style={styles.blocktitle}>Top favourite songs:</Text>   
                   <View style={styles.imagecontainer}>
                        <TouchableOpacity>
                            <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                        </TouchableOpacity>
                       
                        <TouchableOpacity>
                            <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                        </TouchableOpacity>                      
                   </View>                
               </View>
                <View style={styles.blockcontent}>
                    <Text style={styles.blocktitle}>Top Albums:</Text>
                    <View style={styles.imagecontainer}>
                            <TouchableOpacity>
                                <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                            </TouchableOpacity>
                        
                            <TouchableOpacity>
                                <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                            </TouchableOpacity>                      
                    </View>                    
               </View>
               <View style={styles.blockcontent}>
                    <Text style={styles.blocktitle}>Top Albums:</Text>
                    <View style={styles.imagecontainer}>
                            <TouchableOpacity>
                                <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                            </TouchableOpacity>
                        
                            <TouchableOpacity>
                                <Image style ={styles.image} source = {require('../assets/img/musicnotfound.jpg')}></Image>
                            </TouchableOpacity>                      
                    </View>                    
               </View>
            </ScrollView>      
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F2F2F2',
    },
    header:{
        flexDirection:'row',     
        justifyContent:'space-around', 
    },
    overlay:{
        backgroundColor: 'rgba(255,255,255,.6)',
        flexDirection:'row',     
        justifyContent:'space-around', 
        height:80,
    },
    headermenu: {    
        width: '100%', 
        height: 80,        
    },
    title:{
        fontSize:25,
        padding:15,
        paddingTop:16,
        textAlign: 'center',       
        color: 'red',
    },
    blockcontent:{
        flex:1,
        padding:10,
        height: 200,
        backgroundColor: 'rgba(255,255,255,.6)',
        marginTop:10,
    },
    blocktitle:{
        marginBottom:10,
        textAlign:'left',
        fontSize:20,
        fontWeight:'bold',
    },
    imagecontainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    image:{       
        width:100,
        height:100,       
    },
    collectiontitle:{
        textAlign:'center',
    },
    
});