import React,{Component} from "react";
import { StyleSheet, FlatList, View, Picker, ImageBackground, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {ListItem} from 'react-native-elements';

const list = [
    {
         title: "Slow dancing in a burning room",
         icon: "http://4.bp.blogspot.com/-HklEyrnpI54/T7Zdxuvp2pI/AAAAAAAABfY/oZBEE-mRXXM/s1600/untitled.jpg",
         subtitle: "Album: Continuum",
         track: {
            title: 'Slow dancing in a burning room',
            artist: 'John Mayer',
            albumArtUrl: 'http://4.bp.blogspot.com/-HklEyrnpI54/T7Zdxuvp2pI/AAAAAAAABfY/oZBEE-mRXXM/s1600/untitled.jpg',
            audioUrl: 'http://www.1songday.com/wp-content/uploads/2012/11/08-Slow-Dancing-In-A-Burning-Room.mp3',
        },
    },
    {
        title: "Gravity",
        icon: "https://img.discogs.com/7xKDizWVb5bPkwOuiZE8_pv9aJA=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1701329-1459316343-6392.jpeg.jpg",
        subtitle: "Album: Continuum",
        track: {
        title: 'Gravity',
        artist: 'John Mayer',
        albumArtUrl: 'https://img.discogs.com/7xKDizWVb5bPkwOuiZE8_pv9aJA=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1701329-1459316343-6392.jpeg.jpg',
        audioUrl: 'http://www.beihai2000.com/files/201010.mp3',
        },
    },
    {
         title: "Stereo Hearts",
         icon: "https://cps-static.rovicorp.com/3/JPG_500/MI0003/623/MI0003623595.jpg?partner=allrovi.com",
         subtitle: "Stereo Hearts",
         track: {
            title: 'Stereo Hearts',
            artist: 'Gymclassheroes Ft. Adam Levine',
            albumArtUrl: "https://cps-static.rovicorp.com/3/JPG_500/MI0003/623/MI0003623595.jpg?partner=allrovi.com",
            audioUrl: 'https://a.tumblr.com/tumblr_lmo32mjsxK1qzfb7xo1.mp3',
            },
     },
     {
         title: "Hotel California",
         icon: "https://bestclassicbands.com/wp-content/uploads/2015/11/Abbey-Hotel-Cali-crop.jpg",
         subtitle: "Album: The Complete Greatest Hits",
         track: {
            title: 'Hotel California',
            artist: 'The Eagles',
            albumArtUrl: 'https://bestclassicbands.com/wp-content/uploads/2015/11/Abbey-Hotel-Cali-crop.jpg',
            audioUrl: 'http://sacps.edu.hk/elearning/r%20eagles%20-%20hotel%20california.mp3',
            },
     },
     {
        title: "Layla",
        icon: "https://www.rockhall.com/sites/default/files/styles/header_image_portrait/public/ericclapton_001-2.jpg?itok=-nceAiaG",
        subtitle: "Time Pieces / Time Pieces Vol.2",
        track: {
            title: 'Layla',
            artist: 'Eric Clapton',
            albumArtUrl: 'https://www.rockhall.com/sites/default/files/styles/header_image_portrait/public/ericclapton_001-2.jpg?itok=-nceAiaG',
            audioUrl: "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Eric%20Clapton/Eric%20Clapton%20'Layla'.mp3",
            },
     },
    {
        title: "In The End",
        icon: "https://images.genius.com/88dc59de829fe793676348bf42b38a73.1000x1000x1.jpg",
        subtitle: "Album:Hybrid Theory",
        track: {
            title: 'In The End',
            artist: 'Linkin Park',
            albumArtUrl: 'https://images.genius.com/88dc59de829fe793676348bf42b38a73.1000x1000x1.jpg',
            audioUrl: 'http://www2.hkedcity.net/sch_files/a/cyc/cyc-03043d/public_html/music/Linkin_Park_-_in_the_end.mp3',
        },
    },
];
const listpicker=['UK','US','V-POP','K-POP'];

export default class Playlist extends Component{
    constructor(props){
        super(props);
        this.state={
            loading: true, 
            data: [],
            pickerdata:[],
            currentPicker : '',
        };
    }

    componentDidMount=()=>{
        this.loadInitialData();
    }

    loadInitialData=()=>{
       this.setState({
           data : list, 
           pickerdata: listpicker,
        });
    }

    renderSeperator(){
        return ( <View
            style={{
              height: 1,
              width: "80%",
              backgroundColor: "#CED0CE",
              marginLeft: "20%",
            }}
        />);
    }

    renderHeader = ()=>{
       return(
       <Picker
       selectedValue={this.state.currentPicker}
       style={{height: 50, width: 150}}
       onValueChange={(itemValue)=> console.log(itemValue)}>
        {
            pickerItems = this.state.pickerdata.map(pickerinfo=>( 
            <Picker.Item key={pickerinfo.toString()} label={pickerinfo} value={pickerinfo}/>
            ))
        }
       </Picker>
       );
    };
 
    render(){
        return (
            <View>
            <View style={styles.header} >
            <ImageBackground  style={styles.headermenu} source={require('../assets/img/headerbackground.jpg')} >
                <View style={styles.overlay}>
                    <Text style={styles.title}>Music App</Text>    
                </View>          
            </ImageBackground>    
            </View>
           <FlatList
            data={this.state.data}
            renderItem={({item}) => 
                <View>
                    <TouchableOpacity  
                        onPress={()=>{                        
                            var routetrack = [];
                            routetrack.push(item.track);
                            console.log(routetrack);
                            this.props.navigation.navigate('PlayScreen',{tracks : routetrack})
                        }}>
                        <ListItem 
                        title={item.title} 
                        subtitle={item.subtitle}
                        leftAvatar={{source:{uri: item.icon}}}
                        rightIcon={{name:'chevron-right'}}
                        key
                        style={styles.listitem}
                        />
                    </TouchableOpacity>
                </View>
            }
            ItemSeparatorComponent = {this.renderSeperator}
            keyExtractor ={(item)=>item.title}
            //ListHeaderComponent={this.renderHeader}
            />
            </View>
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
    listitem: {
        borderBottomWidth:0,
        marginTop:10,
    }
});