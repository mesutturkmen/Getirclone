import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import {Image,Text} from "react-native"
import HomeScreen from "../screens/HomeScreen"
import CategoryFilterScreen from "../screens/HomeScreen/CategoryFilterScreen"
const Stack = createStackNavigator()

function HomeNavigator() {
  return (

    <Stack.Navigator>
        <Stack.Screen
        
        name = "Home"
        component={HomeScreen}
        options={{
          headerStyle:{backgroundColor:"#5C3EBC"},
          headerTitle:()=>(
            <Image
            source={require("../../assets/getirlogo.png")}
            style = {{width:70,height:30}}/>
          )
        }}
        
        
        />
    <Stack.Screen
        
        name = "CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor:'white',
            
          headerStyle:{backgroundColor:"#5C3EBC"},
          headerTitle:()=>(
            <Text style= {{fontWeight:'bold', fontSize:16, color:'white'}}>
              Ürünler
            </Text>
          )
        }}
        
        
        />



    </Stack.Navigator>

  )
}

export default HomeNavigator
