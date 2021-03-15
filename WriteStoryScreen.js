import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <SafeAreaProvider>
                <View>
                    <Header 
                    backgroundColor = {'pink'}
                    centerComponent = {{text: 'Story Hub', style: styles.header}} />

                    <TextInput
                    style = {styles.inputBox}
                    placeholder = "Story Title" />

                    <TextInput 
                    style = {styles.inputBox} 
                    placeholder = "Author"/>

                    <TextInput
                    style = {styles.storyBox}
                    placeholder = "Write your story" />

                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.text}>Submit </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    inputBox:{
        width: 400,
        height: 50,
        borderColor: 'black',
        borderWidth: 3,
        alignSelf: 'center',
        marginTop: 20
    },

    storyBox:{
        marginTop: 30,
        borderWidth: 3,
        marginLeft: 8,
        width: 400,
        height: 300
    },

    header:{
        height: 70,
        alignContent: 'center',
        paddingTop: 20,
        paddingRight: 25,
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft:10
    },

    button:{
        marginTop: 30,
        marginLeft: 160,
        backgroundColor: 'pink',
        width: 100,
        height: 35,
        alignItems: 'center'
    },
    
    text:{
        paddingTop: 5,
        fontSize: 20,
        fontWeight: 'bold'
    }
})