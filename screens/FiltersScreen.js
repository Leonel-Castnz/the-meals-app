import React from 'react';
import {  } from 'react-native';

const FiltersScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>
            This is the Filters Screen!
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

export default FiltersScreen;