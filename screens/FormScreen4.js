import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
// import { TextInput } from 'react-native-web';

const FormScreen4 = () => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <View>
                    <Image source={require('../assets/prev_26px.png')} style={{width: 18, height: 18,}}></Image>
                </View>
                <View>
                    <Image source={require('./upload_50px.png')} style={{width: 20, height: 20,}}></Image>
                </View>
            </View>

            <View style={styles.title}>
            <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.43_a35a1b21.jpg')} style={{width: 190, height: 190,marginLeft:88}}></Image>
            </View>

            <View style={styles.liste}>
                <View style={styles.produit}>
                    <View style={{justifyContent: 'center',}}>
                    <View style={styles.img}>
                        <Text style={{color:'green',}}>Vegetable</Text>
                    </View>
                        <Text style={{fontWeight:'bold',fontSize:18,}}>Broccoli</Text>
                        <Text>Lorem ipsum</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent: 'center',gap:10,}}>
                        <View style={styles.plus}>
                    <Image source={require('./subtract_64px.png')} style={{width: 20, height: 20,}}></Image>
                    </View>
                        <Text style={{fontWeight:'bold',}}>1</Text>
                        <View style={styles.plus}>
                        <Image source={require('./plus_math_64px.png')} style={{width: 20, height: 20,}}></Image>
                        </View>
                    </View>
                </View>

                <View style={styles.produit}>
                    <View style={styles.imge}>
                        <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.42_d75d5a5f.jpg')} style={{width: 40, height: 40,}}></Image>
                    </View>
                    <View style={{justifyContent: 'center',}}>
                    <Text style={{fontWeight:'bold',fontSize:18,}}>Broccoli</Text>
                        <Text>Lorem ipsum</Text>
                    </View>
                    <View style={{justifyContent: 'center',color:'gray',}}>
                    <Text>Lorem ipsum</Text>
                    </View>
                </View>
                <View style={styles.texte}>
                    <Text style={{fontSize:18,fontWeight:'bold',}}>Description</Text>
                <Text style={{ fontSize: 15, top:10,}}>Juicy Orange c'est trop cool ça! voulez vous me rejoindre pour gouter a ce delice? bon! là je suis en classe entrain de coder en <Text style={{color:'green',}}>react et </Text></Text>
            </View>
            </View>
            <View style={{flexDirection:'row',marginLeft:-59,top:45,}}>
                <View style={{ justifyContent: 'center', width: 50, height: 40, backgroundColor: 'white',marginLeft: 60, marginTop: 22, borderRadius: 10, borderWidth: 1.5, borderColor: 'gray', }}>
                <Image source={require('./messages_48px.png')} style={{width: 40, height: 40,justifyContent:'center',marginLeft:4,}}></Image>

                </View>
                <View style={{ justifyContent: 'center', width: 250, height: 40, backgroundColor: 'white', marginLeft: 20, marginTop: 22, borderRadius: 10, borderWidth: 2, borderColor: 'green',}}>
                    <Text style={{ justifyContent: 'center', color: 'green', marginLeft: 60, }}>Add to card $1.90</Text>
                </View>
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
        width:'100%',
        height:240,
        backgroundColor:'#CCFFCC',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:20,
        marginTop:10,
    },

    liste:{
        marginTop: 30,
        gap: 55,
    },

    produit:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        top:15,
    },
    texte:{
        top:20,
    },

    img:{
        backgroundColor: 'white',
        borderWidth:2,
        borderColor:'green',
        width: 70,
        height: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imge:{
        backgroundColor:'#CCFFCC',
        width: 50,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plus:{
        backgroundColor: 'white',
        borderWidth:2,
        borderColor:'green',
        width: 30,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FormScreen4;