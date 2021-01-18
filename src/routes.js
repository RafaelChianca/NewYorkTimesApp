import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Unicons from '@iconscout/react-native-unicons';
import Home from './pages/Home';
import Science from './pages/Science';

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <NavigationContainer>
             <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    keyboardHidesTabBar: true,
                    style: {
                        backgroundColor: 'white',
                        borderTopColor: 'rgba(255, 255, 255, 0.2)',
                        borderTopWidth: 1,
                    },
                    showLabel: true,
                    activeTintColor: 'black'
                }}
            >
                <Tab.Screen 
                    name="Tech"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Unicons.UilLightbulbAlt size={28} color={focused ? 'black' : 'lightgrey'}/>
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Science"
                    component={Science}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Unicons.UilMicroscope size={28} color={focused ? 'black' : 'lightgrey'}/>
                        ),
                    }}
                />
            </Tab.Navigator>
            
        </NavigationContainer>
    );
}

export default Routes;