import React from 'react'
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button } from 'react-native-web';
import { useState } from 'react';

export default function AddItem({handleAddItem}) {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [quantity, setQuantity] = useState('');
const [image, setImage] = useState('');

const handleTitleChange = (e) =>{
    setTitle(e.target.value);
};
const handleDescriptionChange = (e) =>{
    setDescription(e.target.value);
};
const handlePriceChange = (e) =>{
    setPrice(e.target.value);
};
const handleQuantityChange = (e) =>{
    setQuantity(e.target.value);
};
const handleImageChange = (e) =>{
    setImage(e.target.value);
};

    const handleSubmitItem = (e) =>{
        e.preventDefault();
        if(title.length !== 0 && description.trim().length > 10){
            const newItem ={
          title,
          description,
          price,
          quantity,
          image
            };
            handleAddItem(newItem);
            setTitle("");
            setDescription("");
            setPrice("");
            setQuantity("");
            setImage("");
        }
        
    }
    return (
        <View style={styles.formContainer}>
        <label style = { styles.label }> New item entry </label> 
        <form style = { styles.inputform }> <div style = { styles.inputfieldContainer } > <input type = "text" value = {title} onChange = {handleTitleChange} placeholder = 'Title' style = { styles.inputfield }/> </div>
         <div style = { styles.inputfieldContainer }> <input type = "text" value = {description}  onChange = {handleDescriptionChange} placeholder = 'Description' style = { styles.inputfield }/> </div> 
        <div style = { styles.inputfieldContainer } > <input type = "text" value = {price} onChange={handlePriceChange} placeholder = 'Price' style = { styles.inputfield }/> </div> 
        <div style = { styles.inputfieldContainer }> <input type = "number" value = {quantity} onChange = {handleQuantityChange} placeholder = 'Quantity' style = { styles.inputfield }/> </div>
        <div style = { styles.inputfieldContainer }> < input type = "file" value = {image} onChange={handleImageChange}/> </div> 
        <div style={styles.buttonContainer}><button type = "button" onSubmit={handleSubmitItem} style = { styles.button }> Add item </button></div>
          </form>
        </View>
    )
}

const styles = StyleSheet.create({

    formContainer:{
     width: 280,
     padding: 15,
        paddingTop: 20,
        alignContent:"center",
        alignItems:"center",
       marginLeft: 13,
      
        
    },
    label:{
        fontFamily: "georgia, serif",
       alignItems:"center",
       fontWeight:"bold",
       marginBottom:10
     
       
    },
    inputform: {
        width: 240,
        padding: 15,
        paddingTop: 20,
        backgroundColor: "lightgrey",
        borderRadius: 10,
        alignContent: "center",
        alignItems:"center"
    },
    inputfieldContainer:{
    height: 50
    },
    inputfield: {
        height: 35,
        width: 230,
        borderRadius:10
    },
    buttonContainer:{
        alignContent:"center",
        alignItems:"center",
       marginLeft: 80
    },
    button: {
        borderRadius: 15,
        backgroundColor: "green",
        color: "white",
        fontWeight: "bold",
        alignItems: "center",
        height: 30,
    },

})