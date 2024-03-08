//Importações Padrão
import { View, Text, Image } from "react-native";
import { styles } from "../styles/styleSheet";
//Importações React Navigation
import { useNavigation } from "@react-navigation/native";
//Importação Imagem
import Quadro from '../assets/images/senai.png'


export default function About() {
  const navigation = useNavigation();

  return (
    
      <View style={styles.container}>
        <View style={styles.corpo}>

            <Image
                source={Quadro}
                style={styles.obra}
                resizeMode='cover'
            />

            <View style={styles.descricao}>
                <Text style={{textAlign: 'justify'}}> "Na página "Sobre Nós", apresentamos Eduardo, Matheus, Guilherme e Ana Clara, quatro alunos entusiasmados do SENAI, todos embarcando na jornada do curso de Análise e Desenvolvimento de Sistemas.
                </Text>
            </View>
            
        </View>
      </View>
  
  );
}
