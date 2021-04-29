import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const DailyScreen = ({navigation, ...props}) => {
    return(
        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    }

});

export default DailyScreen;