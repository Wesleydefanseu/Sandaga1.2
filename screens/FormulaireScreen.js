import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
// import { TextInput } from 'react-native-web';

const FormulaireScreen = () => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <View>
                    <Image source={require('../assets/prev_26px.png')} style={{ width: 30, height: 30, }}></Image>
                </View>
                <View>
                    <Text style={{ fontSize: 23, fontWeight: '600', }}>Product Detail</Text>
                </View>
                <View>
                    <Image source={require('../assets/share_24px.png')} style={{ width: 30, height: 30, }}></Image>
                </View>
            </View>

            <View style={styles.title}>
                <Text style={{ fontSize: 23, fontWeight: '600', }}>Juicy Orange</Text>
                <Text style={{ fontWeight: '600', color: '#FF9999', }}>Sweet and Juicy</Text>
            </View>

            <View style={styles.title}>
                <Text style={{ fontSize: 15, }}>Juicy Orange c'est trop cool ça! voulez vous me rejoindre pour gouter a ce delice? bon! là je suis en classe entrain de coder en react et je ne sais vraiment pas si ce que je fait est bien ou pas</Text>

            </View>
            <View style={styles.coe}>
                <View style={{ justifyContent: 'center', width: 50, height: 47, backgroundColor: '#FFE4C4',marginLeft: 60, marginTop: 22, borderRadius: 15, borderWidth: 3, borderColor: '#FF9999', }}>
                <Image source={require('./heart_48px.png')} style={{width: 40, height: 40,}}></Image>

                </View>
                <View style={{ justifyContent: 'center', width: 180, height: 47, backgroundColor: '#FF9999', marginLeft: 10, marginTop: 22, borderRadius: 20, }}>
                    <Text style={{ justifyContent: 'center', color: 'white', marginLeft: 29, }}>Find Nearest Store</Text>
                </View>
            </View>
            <View style={styles.liste}>
                <View style={{justifyContent: 'center',borderRadius:32,width:'108%',height:'230%',backgroundColor:'white',marginLeft:-17,marginTop: 60,}}>
                <Image source={require('./orange.jpg')} style={{width: 230, height: 128,marginTop:-150,marginLeft:90,}}></Image>
                    <Text style={{fontSize: 23,fontWeight: 600,marginLeft:15,marginTop:20,}}>Nutrition Facts</Text>
                    <Text style={{fontSize: 17,fontWeight: 600,color:'gray',marginLeft:18,marginTop:19,}}>Fiber  3g                                                            7%</Text>
                    <View style={{width:240,height:5,backgroundColor:'pink',borderRadius:50,marginLeft:10,}}><View style={{width:270,height:5,backgroundColor:'gray',borderRadius:50,marginLeft:120,}}></View></View>
                    <Text style={{fontSize: 17,fontWeight: 600,color:'gray',marginLeft:18,marginTop:25,}}>Good Sugar  12g                                               5%</Text>
                    <View style={{width:240,height:5,backgroundColor:'pink',borderRadius:50,marginLeft:10,}}><View style={{width:210,height:5,backgroundColor:'gray',borderRadius:50,marginLeft:178,}}></View></View>

                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 15,
        backgroundColor: '#FFE4C4',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    coe: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft:-59, 
    },

    title: {
        marginTop: 20,
    },

    liste: {
        marginTop: 30,
        gap: 25,
    },

    produit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    img: {
        backgroundColor: '#fce9c8',
        width: 70,
        height: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FormulaireScreen;