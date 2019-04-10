import React,{Component} from "react";
import { StyleSheet, FlatList, View, Picker, Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {ListItem,SearchBar} from 'react-native-elements';

const list = [
    {
         title: "First playlist",
         icon: require('../assets/img/musicnotfound.jpg'),
         subtitle: "subtitle",
    },
     {
         title: "Second playlist",
         icon: require('../assets/img/musicnotfound.jpg'),
         subtitle: "subtitle",
     },
     {
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
           <FlatList
            data={this.state.data}
            renderItem={({item}) => 
                <TouchableOpacity>
                    <ListItem 
                    title={item.title} 
                    subtitle={item.subtitle}
                    leftAvatar={{source: item.icon}}
                    rightIcon={{name:'chevron-right'}}
                    key
                    style={styles.listitem}
                    />
                </TouchableOpacity>
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
    }
});