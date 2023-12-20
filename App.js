import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FormScreen5 from './screens/FormScreen5';
import FormScreen0 from './screens/FormScreen0';
import FormScreen4 from './screens/FormScreen4';
import FormulaireScreen2 from './screens/FormulaireScreen2';
import FormulaireScreen from './screens/FormulaireScreen';
import FormulaireScreen3 from './screens/FormulaireScreen3';
{/*import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';*/}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Form0" component={FormScreen0} />
        <Tab.Screen name="Form" component={FormulaireScreen} />
        <Tab.Screen name="Form2" component={FormulaireScreen2} />
        <Tab.Screen name="Form3" component={FormulaireScreen3} />
        <Tab.Screen name='Form5' component={FormScreen5} />
        <Tab.Screen name='Form4' component={FormScreen4} />
        {/*<Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />*/}

      </Tab.Navigator>
    </NavigationContainer>
  );
}
