import { View, Text, Button } from 'react-native';
import { styles } from '../styles/styleSheet';

export default function LoginButton() {
    return (
        <View>
            <Button
                style={styles.Button}
                title="Login"
                color="black"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}