//Importações Padrão
import { View, ImageBackground, Text, Button } from "react-native";
import { styles } from "../styles/styleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";
//Importação Imagem
import FundoH from '../assets/images/toji.png'

export default function Home() {
  const navigation = useNavigation();

  return (
    //Imagem de fundo
    <ImageBackground
      source={FundoH}
      style={styles.fundo}
    >

      <View style={styles.container}>
        <Text style={styles.hey}>Essa é a nossa home</Text>
      </View>

    <View style={styles.boton}> 
      <Button title="About" onPress={() => navigation.navigate("About")} color= 'ligthblue' />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} color= 'ligthblue' />
      <Button title="Login" onPress={() => navigation.navigate("Login")} color= 'ligthblue' />
      </View>
    </ImageBackground>
  );
}
