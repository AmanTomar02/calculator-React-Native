import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native'
import React, { useState } from 'react'

const MainScreen = () => {

    const [value, setValue] = useState('0')
    const [bracketopen, setBracketOpen] = useState(false)


    const handlePress = (val: any) => {
        // console.warn("press", val)

        if (val == 'AC') {
            setValue('0');
        }
        else if (val == '=') {

            try {
                if ((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length) {
                    //setValue('Formate Error')
                    if (value.slice(-1) == '+' || value.slice(-1) == 'x' || value.slice(-1) == '/' || value.slice(-1) == '-' || value.slice(-1) == '%' || value.slice(-1) == '.') {

                        setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)
                    }
                    else {
                        setValue(`${eval(value.replace('()', '(0)'))}`)
                    }

                }
                //else {
                //     console.log("unequal brackets ")
                // }
            } catch (error) {

                console.warn(error)
                setValue('Formate Error')
            }


        }


        else if (val == '<') {
            setValue(value.slice(0, -1))
        }


        else if (val == '()') {

            if (value == '0') {
                setValue('(')
                setBracketOpen(true)
            }

            else if (value.slice(-1) == '+' || value.slice(-1) == 'x' || value.slice(-1) == '/' || value.slice(-1) == '-' || value.slice(-1) == '%' || value.slice(-1) == '.') {
                setValue(value + '(')
                setBracketOpen(true)
            }
            else {
                if (bracketopen == true) {
                    setValue(value + ')')
                    setBracketOpen(false)
                }
                else {
                    setValue(value + '(')
                    setBracketOpen(true)
                }

            }
        }

        else {
            //case for 0 
            if (value == '0') {

                // val == '+' || val == '*' || val == '/' || val == '-' || val == '%' || val == '.'

                if (isNaN(val)) {
                    setValue(value + val)
                }
                else {
                    setValue(val)
                }
            }
            // case for + - x / % . 
            else if (isNaN(val)) {

                if (value.slice(-1) == '+' || value.slice(-1) == 'x' || value.slice(-1) == '/' || value.slice(-1) == '-' || value.slice(-1) == '%' || value.slice(-1) == '.') {
                    setValue(value.slice(0, -1) + val)
                }
                else {
                    setValue(value + val)
                }
            }
            else {
                setValue(value + val)
            }
        }
    }



    return (
        <View style={styles.main_Container}>


            <ScrollView
                scrollEnabled={false}
                contentContainerStyle={{ flexGrow: 1 }}
                style={styles.Output_inner_Container}>

                <Text style={styles.output_txt}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>

            </ScrollView>



            <View style={styles.keypad_Container}>

                {/* Row: 1 */}
                <View style={styles.keypad_Row}>

                    <Pressable
                        onPress={() => handlePress('AC')}
                    >
                        <View style={[styles.btn_Container, styles.equal_AC]}>
                            <Image
                                style={[styles.img_Icon, styles.equal_AC]}
                                source={require('../assets/AC.png')} />
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('()')}
                    >
                        <View style={styles.btn_Container}>
                            <Image
                                style={styles.img_Icon}
                                source={require('../assets/round-brackets.png')} />
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('%')}
                    >
                        <View style={styles.btn_Container}>
                            <Image
                                style={styles.img_Icon}
                                source={require('../assets/percentage.png')} />
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('/')}
                    >
                        <View style={styles.btn_Container}>
                            <Image
                                style={styles.img_Icon}
                                source={require('../assets/divide.png')} />
                        </View>
                    </Pressable>

                </View>

                {/* Row: 2 */}
                <View style={styles.keypad_Row}>

                    <Pressable
                        onPress={() => handlePress('7')}
                    >
                        <View style={styles.btn_Container}>
                            <Text style={styles.txt_number}>7</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('8')}
                    >
                        <View style={styles.btn_Container}>
                            <Text style={styles.txt_number}>8</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('9')}
                    >
                        <View style={styles.btn_Container}>
                            <Text style={styles.txt_number}>9</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('x')}
                    >
                        <View style={styles.btn_Container}>
                            <Image
                                style={styles.img_Icon}
                                source={require('../assets/multiply.png')} />
                        </View>
                    </Pressable>

                </View>
                {/* Row: 3 */}
                <View style={styles.keypad_Row}>

                    <Pressable
                        onPress={() => handlePress('4')}
                    >
                        <View style={styles.btn_Container}>
                            <Text style={styles.txt_number}>4</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('5')}
                    >
                        <View style={styles.btn_Container}>
                            <Text style={styles.txt_number}>5</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('6')}
                    >
                        <View style={styles.btn_Container}>
                            <Text style={styles.txt_number}>6</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('-')}
                    >
                        <View style={styles.btn_Container}>
                            <Image
                                style={styles.img_Icon}
                                source={require('../assets/subtract.png')} />
                        </View>
                    </Pressable>

                </View>
                {/* Row: 4 */}
                <View style={styles.keypad_Row}>

                    <Pressable
                        onPress={() => handlePress('1')}
                    >
                        <View style={styles.btn_Container}>
                            <Text style={styles.txt_number}>1</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('2')}
                    >
                        <View style={styles.btn_Container}>
                            <Text style={styles.txt_number}>2</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('3')}
                    >
                        <View style={styles.btn_Container}>
                            <Text style={styles.txt_number}>3</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('+')}
                    >
                        <View style={styles.btn_Container}>
                            <Image
                                style={styles.img_Icon}
                                source={require('../assets/plus.png')} />
                        </View>
                    </Pressable>

                </View>
                {/* Row : 5 */}

                <View style={styles.keypad_Row}>

                    <Pressable
                        onPress={() => handlePress('.')}
                    >
                        <View style={styles.btn_Container}>
                            <Text style={styles.txt_number}>.</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('0')}
                    >
                        <View style={styles.btn_Container}>
                            <Text style={styles.txt_number}>0</Text>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('<')}
                    >
                        <View style={[styles.btn_Container, styles.equal_AC]}>
                            <Image
                                style={[styles.img_Icon, styles.equal_AC]}
                                source={require('../assets/less-than.png')}
                            />
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => handlePress('=')}
                    >
                        <View style={[styles.btn_Container, styles.equal_AC]}>
                            <Image
                                style={[styles.img_Icon, styles.equal_AC]}
                                source={require('../assets/equal.png')}
                            />
                        </View>
                    </Pressable>

                </View>
            </View>
        </View >
    )
}

export default MainScreen

const styles = StyleSheet.create({
    main_Container: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },

    Output_inner_Container: {
        margin: 5,
        height: '40%',
        width: 400,
        borderRadius: 10,
        flexDirection: 'row-reverse',
     },
    output_txt: {
        height: '100%',
        paddingHorizontal: 5,
        borderWidth: 2,
        fontSize: 35,
        width: 400,
        borderRadius: 10,
        textAlign: 'right',
        alignItems: 'center',
        color: '#000000',
        borderColor: 'lightgray',
        justifyContent: 'center',
    },

    keypad_Container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%',
        width: '100%',
     },
    keypad_Row: {
        flexDirection: 'row',

    },
    btn_Container: {
        backgroundColor: "#ffffff",
        margin: 8,
        borderRadius: 40,
        elevation: 10,
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img_Icon: {
        tintColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    equal_AC: {
        tintColor: "#000000",
        backgroundColor: '#FFA600',
    },
    txt_number: {
        color: 'black',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
})