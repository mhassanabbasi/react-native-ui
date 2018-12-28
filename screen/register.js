import React, {Component} from "react";
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput, 
    Dimensions, 
    Button,
    TouchableOpacity} from 'react-native';


export default class Register extends React.Component {
  render() {
    return (
        <View style={styles.container}>
           <View >
               <Text style={styles.heading}>Register</Text>
           </View> 
           <View style={styles.loginform}>
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputtext}
                        placeholder='First Name' 
                    />
                </View>
              <View style={styles.seprate}></View>  
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputtext}
                        placeholder='Last Name' 
                    />
                </View>
                <View style={styles.seprate}></View>  
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputtext}
                        placeholder='Email' 
                    />
                </View>
                <View style={styles.seprate}></View>  
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputtext}
                        placeholder='CNIC' 
                    />
                </View>
                <View style={styles.seprate}></View>  
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputtext}
                        placeholder='Mobile Number' 
                    />
                </View>
                <View style={styles.seprate}></View>  
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputtext}
                        placeholder='Password' 
                    />
                </View>
                <View style={styles.seprate}></View>  
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputtext}
                        placeholder='Retype Password' 
                    />
                </View>
           </View>     
           <View style={styles.button}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('car')}>
                    <Text style={styles.regbutton}>Next</Text>
                </TouchableOpacity>
           </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97E78C'
    },
    heading:{
        fontSize:30,
        color:'#fff',
        marginBottom:10
    },
    inputtext:{
        backgroundColor:'#fff',
        color:'#000',
        width:250,
        paddingTop: 5,
        paddingLeft:10,
        paddingBottom:5,
        paddingRight:10
    },
    seprate:{
        borderBottomWidth: 0.8,
        borderBottomColor: '#97E78C',
        marginBottom:5,
        marginTop: 5
    },
    button:{
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    regbutton:{
        backgroundColor:'#12132b', 
        color:'#fff', 
        fontSize:16,
        padding:5,
        width:90,
        height:35,
        textAlign:'center',
        marginRight:10
    },
    logbutton:{
        backgroundColor:'#fff', 
        color:'#3e3f8f', 
        fontSize:16,
        padding:5,
        width:90,
        textAlign:'center',
        height:35
    }
});