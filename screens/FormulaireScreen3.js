import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
// import { TextInput } from 'react-native-web';

const FormulaireScreen3 = () => {
    return (
        <View style={styles.body}>

            <View style={styles.liste}>
                <View><Image source={require('./WhatsApp Image 2023-12-15 à 21.22.44_91b7d5e4.jpg')} style={{width: 330, height: 318,}}></Image></View>
                <View style={{ justifyContent: 'center', borderRadius: 32, width:'108%', height: '87%', backgroundColor: '#B0F2B6', marginLeft: -15,  }}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 26, fontWeight: 'bold',marginLeft:90,}}>Order Groceries </Text>
                        <Text style={{ fontSize: 26, fontWeight: 'bold',marginLeft:77,}}>and Get delivered</Text>
                        <Text style={{ fontSize: 26, fontWeight: 'bold',marginLeft:90,}}>in few minutes </Text>

                    </View>

                    <View style={{justifyContent:'center',width:140,height:47,backgroundColor:'white',marginLeft:140,marginTop:14, borderRadius:20, borderWidth: 2, borderColor: 'green',}}>
                        <Text style={{justifyContent:'center',color:'green',marginLeft:38,}}>Get Started</Text>
                        
                    </View>

                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    coe: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: -59,
    },

    title: {
        marginLeft:20,
        marginTop: -20,
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

export default FormulaireScreen3;