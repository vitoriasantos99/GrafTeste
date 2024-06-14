import React from "react";
import { View, FlatList, Text, ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { ListItem, Avatar, ThemeProvider } from "@rneui/themed";

import Prods from "../data/Prods";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";

export default props => {

    function getProdItem({ item: Prod }) {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Avatar
                    source={{ uri: Prod.avatarURL }}
                    size={80}
                    style={style.avatar}
                />

                <ListItem>
                    <ListItem.Content style={{ backgroundColor: 'transparent' }}>
                        <ListItem.Title>{Prod.name}</ListItem.Title>
                        <ListItem.Title>{Prod.descricao1}</ListItem.Title>
                        <ListItem.Title>{Prod.descricao2}</ListItem.Title>
                        <ListItem.Title>{Prod.descricao3}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

            </SafeAreaView>
        )
    }
    return (

        <ImageBackground
            source={require('../image/fundodesenho.png')}
            style={{ flex: 1 }}>

            <FlatList
                keyExtractor={Prods => Prods.id.toString()}
                data={Prods}
                renderItem={getProdItem}
            />

        </ImageBackground>
    )

}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        // avatar: {
        //     marginLeft: 120,
        //     marginTop: 20,
        //     height: 100,
        //     width: 100,
        // },
        fundo: {
            flex: 1,
            width: '150',
            height: '150',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
)
