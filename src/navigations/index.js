import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../login/index';
import Products from '../todo/Products';
import addl from '../todo/addlist';
import todomodal from '../todo/todomodal';

const Stack = createStackNavigator();

function  Rootnavi() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Products" component={Products}/>
            <Stack.Screen name="todomodal" component={todomodal}/>
            <Stack.Screen name="addl" component={addl}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
    
}
export default Rootnavi;