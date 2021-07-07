import React from 'react';
import {  } from 'react-native';

const MeatDetailScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>
            This is the Meat Detail Screen!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MeatDetailScreen;