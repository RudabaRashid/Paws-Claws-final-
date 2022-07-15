import React from 'react';
import { Button, Text, View, } from 'react-native';


import 'react-native-gesture-handler';
import {SafeAreaView, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../const/colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';



const SplashScreen =({navigation}) =>{
    return (

        <SafeAreaView>
            
        <View>
        
        <Button title="SplashScreen" onPress={()=>navigation.navigate("SignIn")}></Button>
        </View>

        <Image
                style={{width: 300, height: 240, alignSelf: 'center'}}
                source={require('../../assets/vetsplash.jpg')}
              />

              
              
        </SafeAreaView>
    
    );
};


export default SplashScreen;

