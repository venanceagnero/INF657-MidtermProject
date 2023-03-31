import React from 'react';
import { View, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import ItemsData from './ItemsData';
import ItemList from './ItemList';
import AddItem from './AddItem';


export default function ShoppingList({title, description, price, image, quantity, renderRightActions }) {

    const [items, setItems] = useState([]);
   const [itemlist, setItemlist] = useState(ItemsData);

    const addItem = (newItem) =>{
        newItem.id = uuidv4();
        
        setItemlist(
            [newItem.id, ...itemlist]
            );

        setItems(
           [newItem.id, ...items]
        );
    }; 

    return (<View style={Styles.container}>
        <Text style={Styles.headerContainer}> <h3 style={Styles.header}> Shopping Items List </h3></Text>
            <View style={Styles.container2}>
            <AddItem handleAddItem={addItem}/>
            <Text style={Styles.subHeader}> Shopping Card item list</Text>
            <ItemList itemsList = { itemlist }/>  
            </View>
            </View>
    )
}


const Styles= StyleSheet.create({
    container:{
        flax: 1,
        flexDirection: "column",
        width: 500,
    },
    container2:{
        flax: 1,
        flexDirection: "column",
       marginLeft:83,
       marginRight:80,
        marginBottom:40,
        width: 310,
    },
    headerContainer:{
        backgroundColor: "green",
        height: 60,
    },

    header:{
        color:"white",
        fontFamily: "georgia, serif",
        textAlign: "center",
  
    },
    subHeader:{
        color:"black",
        fontFamily: "georgia, serif",
        textAlign: "center",
        fontWeight:"bold",
        marginTop: 12,
        fontSize: 16
    }
}) 