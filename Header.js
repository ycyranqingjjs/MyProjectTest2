import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

class Header extends Component{
    render(){
       
        return(
         <View>
            <Text
            头View
            />
         </View>   
        )
    }
}


const styles = StyleSheet.create({
    do:{
        color:'red',

    }

})

export default Header;