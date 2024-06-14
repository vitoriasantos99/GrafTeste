import React  from "react";
import { SafeAreaView, View, Text, Image, ImageBackground, StyleSheet, FlatList, } from "react-native";
import { ListItem, Avatar, ThemeProvider } from "@rneui/themed";

import Prods from "../data/Prods";


export default props => {

    function getProdItem({item: Prod}){

    return(
        <SafeAreaView style={style.container}>
            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={style.fundo}
            >   
            {/* <View style={style.testando}>
                <Text style={style.texto}>teste</Text>
            </View> */}
            <View style={style.testando}>
                <ThemeProvider>
                    <ListItem >
                        <Avatar
                            source={{uri: Prod.avatarURL}}
                            size={80}
                            style={style.avatar}
                        />
                        <ListItem.Content >
                            <ListItem.Title>{Prod.name}</ListItem.Title>
                            <ListItem.Title>{Prod.descricao1}</ListItem.Title>
                            <ListItem.Title>{Prod.descricao1}</ListItem.Title>
                            <ListItem.Title>{Prod.descricao3}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </ThemeProvider>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

return(
    <FlatList
        keyExtractor={Prods => Prods.id.toString()}
        data={Prods}
        renderItem={getProdItem}
    />
)
}


const style = StyleSheet.create(
    {
        container:{
            flex:1,
        },
        fundo: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        testando:{
            flex: 3,
            backgroundColor: "#000",
        },
    }
)