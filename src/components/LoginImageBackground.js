import { View, Text, Image, ImageBackground } from 'react-native';
import { styles } from '../styles/styleSheet';
import LoginText from './LoginText';
import LoginButton from './LoginButton';
import LoginImage from './LoginImage';
const img1 = { uri: 'https://pt.wikipedia.org/wiki/Foca#/media/Ficheiro:B%C3%A9b%C3%A9_Phoque_de_Weddell_-_Baby_Weddell_Seal.jpg' }
import LoginInput from './LoginInput';


export default function LoginImageBackground() {
    return (
        <ImageBackground
            style={styles.imageBackground}
            source={require('../assets/images/toji.png')}
        >
            <LoginText />
            <LoginInput />
            <LoginButton />

        </ImageBackground>
    )
}