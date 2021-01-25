import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Unicons from '@iconscout/react-native-unicons';
import Technology from './pages/Technology';
import Science from './pages/Science';

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Technology"
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
                    name="Technology"
                    component={Technology}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Unicons.UilLightbulbAlt size={28} color={focused ? 'black' : 'lightgrey'} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Science"
                    component={Science}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Unicons.UilMicroscope size={28} color={focused ? 'black' : 'lightgrey'} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Routes;