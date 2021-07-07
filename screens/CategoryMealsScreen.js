import React from 'react';
import {  } from 'react-native';

const CategoryMealScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>
            This is the Categories Meal Screen!
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

export default CategoryMealScreen;