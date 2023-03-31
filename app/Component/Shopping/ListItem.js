import React from 'react'
import { Text, StyleSheet, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Swipeable } from 'react-native-gesture-handler';

export default function ListItem({id, title, description, price, image, quantity, checked, onPress, renderRightActions }) {
    return ( <>
        <View style = { styles.mainContainer }>
            <input type="checkbox" style={styles.checkBox} checked={checked}/>
        <Text style = { styles.title }> { title } </Text>      
        <Image style = { styles.image }
        source = { image }/>    
         <Text style = { styles.description } > Description: { description } </Text>   
          <Text style = { styles.price } > Price: { price } </Text>    
          <Text style = { styles.quantity } > Quantity: { quantity } </Text> 
        <div style = { styles.buttonfolder }>
        <div style = { styles.Swipeable }>
        <Swipeable renderRightActions = {()=> onPress(id) }>
        <Icon.Button name = "arrow-left"
        style = { styles.button } > Edit </Icon.Button> 
         </Swipeable> 
         </div>    
         <div style = { styles.Swipeable }>
        <Swipeable renderRightActions ={() => renderRightActions(id)}>
        <Icon.Button name = "arrow-left"
        style = { styles.button }> Delete </Icon.Button>    
         </Swipeable>  
          </div>     
          </div>           
          </View>  
           </>  
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "ghostwhite",
        padding: 5,
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 15,
    },
checkBox:{
    alignItems: "center"
},
    image: {
        height: 220,
        borderRadius: 15,
        alignItems:"center"
    },

    title: {
        fontFamily: "georgia, serif",
        fontWeight: "bold",
        fontSize: 15,
        padding: 3,
        marginBottom: 5,
        color: "black",
    },

    description: {
        fontFamily: "georgia, serif",
        fontSize: 15,
        padding: 3,
        color: "black",
    },

    price: {
        fontFamily: "georgia, serif",
        fontSize: 15,
        padding: 3,
        color: "black",
    },

    quantity: {
        fontFamily: "georgia, serif",
        fontSize: 15,
        padding: 3,
        color: "black",
    },
    button: {
        width: 90,
        height: 20,
        backgroundColor: "green",
        color: "white",
        alignItems: "center",
        fontSize: 5,
      borderRadius: 8
    },
    buttonfolder: {
        margin: "auto",
    },
    Swipeable: {
        width: 90,
        margin: 10,
        backgroundColor: "white",
       
    }

});