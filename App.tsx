
import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground]=useState('#ffffff');
  const generateColor=()=>{
    const hexRange='01234567ABCDEF'
    let color="#"
    for(let i=0;i<6;i++){
      color+=hexRange[Math.floor(Math.random()*16)]
    }
    setRandomBackground(color)
  }
  return(
    <>
    <StatusBar backgroundColor={randomBackground}>
    </StatusBar>
      <View style={[styles.container,{backgroundColor:randomBackground}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={[styles.actionBtn]}>
          <Text style={styles.actionBtnTxt}>Press me</Text>
          <Text style={styles.actionBtnTxt2}>I'll Change the Background!</Text>
        </View>
      </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 15,
    paddingHorizontal: 50
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase",
    alignContent:'center',
    marginBottom:4
  },
  actionBtnTxt2: {
    fontSize: 15,
    color: "#FFFFFF",
    textTransform: "uppercase",
    alignContent:'center',
    fontWeight:'bold'
  }
});

export default App;
