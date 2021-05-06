import React from 'react';
import { View, StyleSheet } from 'react-native';

import Color from '../../constants/colors';

const Block = props => {
    return(
        <View style={{...styles.content, ...props.style}}>
            {props.children}
        </View>
    );
};
const styles = StyleSheet.create({
    content: {
        borderRadius: 5,
        backgroundColor: Color.white
    }
});

export default Block;