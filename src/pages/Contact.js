//Importações Comuns
import { View, TextInput, Button } from "react-native";
import { styles } from "../styles/styleSheet";
//Importações do React Navigation
import { useNavigation } from "@react-navigation/native";


export default function Contact() {

  pressButton = () => {
    alert('Infelizmente está função não está funcionando, que tal tentar outra hora?')
  }

  const navigation = useNavigation();

return (
    //Imagem de fundo
    
  <View style={styles.container}>
    <View style={styles.corpo}>

  <TextInput 
    placeholder='Coloque seu nome'
    style={styles.inputs}
    inputMode='text'
  />
  <TextInput 
    placeholder='Digite seu E-mail'
    style={styles.inputs}
    inputMode='text'
  />
  <TextInput 
    placeholder='Deposite aqui sua mensagem de reclamação'
    style={styles.inputs}
    inputMode='text'
  />
 
  <Button
    title='Entrar'
    color= 'ligthblue'
    onPress={pressButton}
  />
        
  </View>
    </View>
  
  );
}
