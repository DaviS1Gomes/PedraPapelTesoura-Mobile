import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet,Text, View, Image, TouchableOpacity} from "react-native";

export default function jokenpo(){
  const [ImagePedra, setImagePedra] = useState(require("./assets/pedra.png"));
  const [ImagePapel, setImagePapel] = useState(require("./assets/Papel.jpg"));
  const [ImageTesoura, setImageTesoura] = useState(require("./assets/Tesoura.png"));
  const [ImagePC, setImagePC] = useState(require("./assets/interrogacao.webp"));
  const [result, setResult] = useState(""); 

  const playPC = (choice) => {

    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch(randomNum){
      case 1:
      setImagePC(require("./assets/pedra.png"));
      break;
      case 2:
        setImagePC(require("./assets/Papel.jpg"));
      break;
      case 3:
        setImagePC(require("./assets/Tesoura.png"));
      break;
    }
    if (choice === randomNum){
    setResult("Empate")
    } else if ((choice === 1 && randomNum === 3) || (choice === 2 && randomNum === 1) || (choice === 3 && randomNum === 2) ){

      setResult("Vitoria")

    } else {
      setResult("Derrota")
    }
      
    
  };





  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => playPC(1) }>
    <Image source={ImagePedra} style={styles.image}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() =>  playPC(2)}>
    <Image source={ImagePapel} style={styles.image}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() =>  playPC(3)}>
    <Image source={ImageTesoura} style={styles.imagetes}/>
    </TouchableOpacity>
    <Text style={styles.Text}>Oponente:</Text>
    <Image source={ImagePC} style={styles.imageInt}/>
    <Text style={styles.Text}>Resultado:</Text>
    <Text style={styles.Text}>{result}</Text>
    <StatusBar style="auto" />
    </View>
  
  );


}





const styles = StyleSheet.create({

  container: {
    backgroundColor:'#FFF',
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',

  },
  image:{
    width:180,
    height:150,
    marginTop: 5,

  },
  imageInt:{
    width:150,
    height:150,
  },
  imagetes:{
    width:210,
    height:150,
    marginTop: 5,
  },
  Text:{
    fontSize: 25,


  }
})