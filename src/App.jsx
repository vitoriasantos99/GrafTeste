import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './views/EntradaScreen';
import ContactScreen from './views/ContactScreen';
import LoginScreen from "./views/LoginScreen";
import ProductScreen from "./views/HomeScreen";
import Sale from "./views/SaleScreen";
import Envelope from "./views/EnvelopeScreen";
import RegisterScreen from "./views/RegisterScreen";
import SenhaScreen from "./views/SenhaScreen";
import SobreScreen from "./views/SobreScreen";
import Home from './routes/Home';
import FimList from './views/FimList';
import CompraScreen from './views/CompraScreen';
import Teste from './views/Teste';
import ImagemScreen from './views/ImagemScreen';


const Stack = createNativeStackNavigator()

export default props => {

    return(
        <SafeAreaView style={{flex:1, flexDirection: 'center'}}>
            <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="Home" component={HomeScreen} options={{
                    headerShown: false
                    }}/> */}
                    {/* <Stack.Screen name="Product" component={ProductScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                        }}/>
                    <Stack.Screen name="Contact" component={ContactScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                        }}/>
                    <Stack.Screen name="Sale" component={Sale} options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                    }}/>
                    <Stack.Screen name="Envelope" component={Envelope} options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                    }}/> */}
                    {/* <Stack.Screen name="Login" component={LoginScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                    }}/> */}
                    {/* <Stack.Screen name="Register" component={RegisterScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                    }}/> */}
                    {/* <Stack.Screen name="Senha" component={SenhaScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                    }}/>
                    <Stack.Screen name="Sobre" component={SobreScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                    }}/> */}
                    <Stack.Screen name='Fim' component={FimList} options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                    }}/>
                    {/* <Stack.Screen name="Compra" component={CompraScreen} options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                    }}/>
                    <Stack.Screen name="Teste" component={Teste} options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                    }}/> */}
                    {/* <Stack.Screen name='Imagem' component={ImagemScreen} options={{
                        title: '',
                        headerTransparent: true,
                        headerShown: false
                    }}/> */}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            backgroundColor: "#D4E2F3",
            flexGrow: 1,    
        }
    }
)