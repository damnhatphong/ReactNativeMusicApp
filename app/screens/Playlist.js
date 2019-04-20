import React,{Component} from "react";
import { StyleSheet, FlatList, View, Picker, Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {ListItem,SearchBar} from 'react-native-elements';


export const TRACKS = [
    {
      title: 'Stressed Out',
      artist: 'Twenty One Pilots',
      albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
      audioUrl:  require('../assets/sound/FurElise.mp3'),//"http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3",
    },
    {
      title: 'Hotline Bling',
      artist: 'Drake',
      albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
      audioUrl: "http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3",
    },
  ]

const list = [
    {
         title: "First playlist",
         icon: require('../assets/img/musicnotfound.jpg'),
         subtitle: "subtitle",
         track: {
            title: 'Hotline Bling',
            artist: 'Drake',
            albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
            audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
        },
    },
     {
         title: "Second playlist",
         icon: require('../assets/img/musicnotfound.jpg'),
         subtitle: "subtitle",
         track: {
            title: 'Hotline Bling',
            artist: 'Drake',
            albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
            audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
        },
     },
     /*{
         title: "Third playlist",
         icon: require('../assets/img/musicnotfound.jpg'),
         subtitle: "subtitle",
     },
     {
         title: "Fourth playlist",
         icon: require('../assets/img/musicnotfound.jpg'),
         subtitle: "subtitle",
     },
     {
        title: "Fifth playlist",
        icon: require('../assets/img/musicnotfound.jpg'),
        subtitle: "subtitle",
    },
    {
        title: "Sixth playlist",
        icon: require('../assets/img/musicnotfound.jpg'),
        subtitle: "subtitle",
    },*/
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
                        leftAvatar={{source: item.icon}}
                        rightIcon={{name:'chevron-right'}}
                        key
                        style={styles.listitem}
                        />
                    </TouchableOpacity>
                </View>
            }
            ItemSeparatorComponent = {this.renderSeperator}
            keyExtractor ={(item)=>item.title}
            ListHeaderComponent={this.renderHeader}
            />
        );
    }
}

const styles = StyleSheet.create({
    listitem: {
        borderBottomWidth:0,
        marginTop:10,
    }
});