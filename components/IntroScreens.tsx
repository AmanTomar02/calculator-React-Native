import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const IntroScreens = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner}>
                <Image
                    style={styles.innnerImg}
                    source={require('../assets/CalculatorLogo.webp')}
                />
            </View>
            <Text style={styles.txt}>Calculator</Text>
        </SafeAreaView>
    )
}

export default IntroScreens

const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFA600',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inner: {
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 10,
    },
    innnerImg: {
        height: 100,
        width: 100,
    },
    txt: {
        fontSize: 20,
        margin: 10,
        fontWeight: '600',
        color: '#000000',
    },

})