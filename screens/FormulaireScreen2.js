import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
// import { TextInput } from 'react-native-web';

const FormulaireScreen2 = () => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <View>
                    <Image source={require('../assets/prev_26px.png')} style={{width: 30, height: 30,}}></Image>
                </View>
                <View>
                    <Image source={require('../assets/lock_48px.png')} style={{width: 30, height: 30,}}></Image>
                </View>
            </View>

            <View style={styles.title}>
                <Text style={{fontSize: 23,fontWeight:'600',}}>My</Text>
                <Text style={{fontSize: 23,fontWeight:'600',}}>Order</Text>
            </View>

            <View style={styles.liste}>
                <View style={styles.produit}>
                    <View style={styles.img}>
                        <Image source={require('./orange.jpg')} style={{width: 40, height: 40,}}></Image>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Text>1 x</Text>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Text>Orange</Text>
                        <Text>$10</Text>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Image source={require('./trash_24px.png')} style={{width: 20, height: 20,}}></Image>
                    </View>
                </View>
                <View style={styles.produit}>
                    <View style={styles.img}>
                        <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.42_d75d5a5f.jpg')} style={{width: 40, height: 40,}}></Image>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Text>1 x</Text>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Text>Carotte</Text>
                        <Text>$12</Text>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Image source={require('./trash_24px.png')} style={{width: 20, height: 20,}}></Image>
                    </View>
                </View>
                <View style={styles.produit}>
                    <View style={styles.img}>
                        <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.43_3a1b10dd.jpg')} style={{width: 40, height: 40,}}></Image>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Text>1 x</Text>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Text>Salade</Text>
                        <Text>$13</Text>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Image source={require('./trash_24px.png')} style={{width: 20, height: 20,}}></Image>
                    </View>
                </View>
                <View style={styles.produit}>
                    <View style={styles.img}>
                        <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.45_604be50b.jpg')} style={{width: 40, height: 40,}}></Image>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Text>1 x</Text>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Text>Tomate</Text>
                        <Text>$15</Text>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                        <Image source={require('./trash_24px.png')} style={{width: 20, height: 20,}}></Image>
                    </View>
                </View>
            </View>
            <View style={{justifyContent: 'center',top:25,}}>
                        <Text style={{justifyContent:'center',fontSize:19,marginTop:28,fontWeight:600,}}>Total Price                                       $50</Text>
                        
                    </View>

                    <View style={{justifyContent:'center',width:140,height:47,backgroundColor:'#FF9999',marginLeft:110,top:75, borderRadius:20,}}>
                        <Text style={{justifyContent:'center',color:'white',marginLeft:38,}}>Payement</Text>
                        
                    </View>
        </View>

    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 15,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    title:{
        marginTop: 20,
    },

    liste:{
        marginTop: 30,
        gap: 55,
    },

    produit:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    img:{
        backgroundColor: '#fce9c8',
        width: 60,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FormulaireScreen2;