import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../login/index';
import Products from '../todo/Products';


const Stack = createStackNavigator();

function  Rootnavi() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Products" component={Products}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}
export default Rootnavi;