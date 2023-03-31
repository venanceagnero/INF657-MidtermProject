import React from 'react';
import { StyleSheet} from "react-native";
export default function Header() {
  return (
    <div style={Styles.container}>Shopping Items List</div>
  )
}


const Styles = StyleSheet.create({
container:{
    backgroundColor: "green",
    fontWeight: "bold", 
    fontSize: 30,
    color: "white",
    textAlign: "center",
    padding: 20, 
    marginBottom: 40
    
}

}
)
