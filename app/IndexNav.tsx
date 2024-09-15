import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import MyTaps from './Screens/taps/MyTaps';
import Investment from './Screens/Investment';
import NewGoal from './Screens/NewGoal';
import Questions from './Screens/Questions';
import UserResult from './Screens/UserResult';
import { paths } from '../interfaces/Urls';
import Portfolio from './Screens/Portfolio';
import { FormProvider } from './Store/Store';

const Stack = createNativeStackNavigator();

const IndexNav = () => {
    return (
        <FormProvider>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={paths.myTaps} component={MyTaps} />
                <Stack.Screen name={paths.investment} component={Investment} />
                <Stack.Screen name={paths.newGoal} component={NewGoal} />
                <Stack.Screen name={paths.questions} component={Questions} />
                <Stack.Screen name={paths.userResult} component={UserResult} />
                <Stack.Screen name={paths.portfolio} component={Portfolio} />
            </Stack.Navigator>
        </NavigationContainer>
        </FormProvider>
    );
};

const IndexNavScreen = () => {
    return (
        <View>
            <Text>IndexNav Screen</Text>
        </View>
    );
};

export default IndexNav;
