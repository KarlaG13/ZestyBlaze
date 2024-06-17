import React from 'react';
import { View, Text } from 'react-native';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import Home from './src/Screens/Home';
import Navigation from './src/Navigation';
import { UserProvider } from './src/ZestyBlaze/Core/Infrastructure/Context/UserContext';


const App = () => {
    return (
        <UserProvider>
            <Navigation/>
        </UserProvider>
    );
};

export default App;
