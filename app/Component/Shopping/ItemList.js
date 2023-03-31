import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { useState } from 'react';
import ItemsData from './ItemsData';
import ListItem from './ListItem';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Constants from "expo-constants";
import Card from '../shared/Card';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ItemList() {
    const [itemlist, setitemlist] = useState(ItemsData);
    const editItem = (id) => {
        setitemlist(itemlist.map((item) => item.id === id ? {...item, title: title.id} : item));
        console.log( " is selected")
    };
    const deleteItem = (id) => {
        setitemlist(itemlist.filter((item) => item.id !== id));
    }

    return ( < SafeAreaView style = { styles.screen } >
        <FlatList data = { itemlist }
        keyExtractor = {
            (itemlisted) => itemlisted.id
        }

        renderItem = {
            ({ item }) => ( <Card> < ListItem 
                key= {item.id}
                id = {item.id}
                title = { item.title }
                image = { item.image }
                description = { item.description }
                price = { item.price }
                quantity = { item.quantity }

                onPress = {
                    () => ( <View style = { styles.editcontainer } >
        <TouchableWithoutFeedback onPress = {() => editItem(item.id)} >
        <MaterialCommunityIcons
                            name = "pencil-outline"
                            size = { 25 }
                            color = "black"/>
                        </TouchableWithoutFeedback> 
                        </View>
                    )
                }

                renderRightActions = {
                    () => ( < View style = { styles.deletecontainer } >
         <TouchableWithoutFeedback onPress = {() => deleteItem(item.id)} >
         <MaterialCommunityIcons
                            name = "trash-can"
                            size = { 25 }
                            color = "black"/>
         </TouchableWithoutFeedback>  </View >
                    )
                }
                />

       
        </Card >


            )
        }
        /> </SafeAreaView > )
}


const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    editcontainer: {
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue"
    },
    deletecontainer: {
        backgroundColor: "red",
        width: 100,
        justifyContent: "center",
        alignItems: "center"
    }

})