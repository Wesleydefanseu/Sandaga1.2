import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
// import { TextInput } from 'react-native-web';

const FormScreen5 = () => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <View>
                    <Text>Lorem ipsum</Text>
                    <Text style={{ fontWeight: '700', fontSize: 15, }}>Lorem ipsum lorem est</Text>
                </View>
                <View>
                    <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, right: 5, }}></Image>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextInput
                    style={{ height: 40, width: 310, borderColor: 'gray', borderWidth: 1, paddingLeft: 40, borderRadius: 50, marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff' }}
                    placeholder="Search..."
                />
                <Image source={require('./search_16px.png')} style={{ width: 24, height: 24, margin: 5, position: 'absolute', left: 5 }}></Image>
                <Image source={require('./microphone_24px.png')} style={{ width: 24, height: 24, right: 58, }}></Image>
                <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'green', }}>
                    <Image source={require('./data_transfer_32px.png')} style={{ width: 24, height: 24, left: 10, top: 8, }}></Image>
                </View>
            </View>


            <View style={styles.liste}>
                <View style={styles.produit}>
                    <View style={{ justifyContent: 'center', }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, }}>Categorie</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, }}>
                        <Text style={{ fontWeight: 'bold', color: 'green', }}>Send all</Text>
                    </View>
                </View>

                <View style={styles.produit}>
                    <View style={styles.imge}>
                        <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.43_3a1b10dd.jpg')} style={{ width: 40, height: 40, }}></Image>
                        <Text>Vegetable </Text>
                    </View>
                    <View style={styles.imge}>
                        <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.44_f4beec81.jpg')} style={{ width: 40, height: 40, }}></Image>
                        <Text>Lait </Text>
                    </View>
                    <View style={styles.imge}>
                        <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.45_604be50b.jpg')} style={{ width: 40, height: 40, }}></Image>
                        <Text>Tomate </Text>
                    </View>
                    <View style={styles.imge}>
                        <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.43_a35a1b21.jpg')} style={{ width: 40, height: 40, }}></Image>
                        <Text>Broccoli </Text>
                    </View>
                    <View style={styles.imge}>
                        <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.42_d75d5a5f.jpg')} style={{ width: 40, height: 40, }}></Image>
                        <Text>Carotte</Text>
                    </View>
                </View>

                <View style={styles.produit}>
                    <View style={{ justifyContent: 'center', }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, }}>Deals</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, }}>
                        <Text style={{ fontWeight: 'bold', color: 'green', }}>Send all</Text>
                    </View>
                </View>

                <View style={{ width: '100%', height: 155, borderRadius: 30, backgroundColor: '#B0F2B6', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'column', marginLeft: 30, marginTop: 20 }}>
                        <Text style={{ fontWeight: '1000', fontSize: 25, }}>50% OFF</Text>
                        <Text>Lorem ipsum lorem est</Text>
                        <View style={{ width: 100, height: 30, backgroundColor: 'white', borderRadius: 30, marginTop: 25, }}>
                            <Text style={{ fontWeight: 'bold', color: 'green', fontSize: 15, marginLeft: 12, }}>Shop</Text>
                        </View>
                    </View>

                    <View><Image source={require('./WhatsApp Image 2023-12-15 à 21.22.44_91b7d5e4.jpg')} style={{ width: 110, height: 100, right: 20, top: 25, }}></Image></View>
                </View>

                <View style={styles.produit}>
                    <View style={{ justifyContent: 'center', }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, }}>Popular items</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, }}>
                        <Text style={{ fontWeight: 'bold', color: 'green', }}>Send all</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10, }}>
                    <View style={{ width: 200, height: 240, borderRadius: 30, backgroundColor: 'white', }}>
                        <View>
                            <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, left: 145, top: 15, }}></Image>
                        </View>
                        <View style={styles.title}>
                            <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.43_a35a1b21.jpg')} style={{ width: 70, height: 70, marginLeft: 64, top: 40, }}></Image>
                        </View>
                        <View style={{ width: 150, height: 3, backgroundColor: 'gray', borderRadius: 50, top: 45, left: 22, }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ top: 55, left: 20, }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Broccoli</Text>
                                <Text>$1.25</Text>
                            </View>
                            <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'green', top:58,right:10,}}>
                                    <Image source={require('./data_transfer_32px.png')} style={{ width: 24, height: 24,top: 8, }}></Image>
                                </View>
                        </View>
                    </View>
                    <View style={{ width: 200, height: 240, borderRadius: 30, backgroundColor: 'white', }}>
                        <View>
                            <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, left: 145, top: 15, }}></Image>
                        </View>
                        <View style={styles.title}>
                            <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.43_a35a1b21.jpg')} style={{ width: 70, height: 70, marginLeft: 64, top: 40, }}></Image>
                        </View>
                        <View style={{ width: 150, height: 3, backgroundColor: 'gray', borderRadius: 50, top: 45, left: 22, }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ top: 55, left: 20, }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Broccoli</Text>
                                <Text>$1.25</Text>
                            </View>
                            <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'green', top:58,right:10,}}>
                                    <Image source={require('./data_transfer_32px.png')} style={{ width: 24, height: 24,top: 8, }}></Image>
                                </View>
                        </View>
                    </View>
                    <View style={{ width: 200, height: 240, borderRadius: 30, backgroundColor: 'white', }}>
                        <View>
                            <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, left: 145, top: 15, }}></Image>
                        </View>
                        <View style={styles.title}>
                            <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.43_a35a1b21.jpg')} style={{ width: 70, height: 70, marginLeft: 64, top: 40, }}></Image>
                        </View>
                        <View style={{ width: 150, height: 3, backgroundColor: 'gray', borderRadius: 50, top: 45, left: 22, }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ top: 55, left: 20, }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Broccoli</Text>
                                <Text>$1.25</Text>
                            </View>
                            <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'green', top:58,right:10,}}>
                                    <Image source={require('./data_transfer_32px.png')} style={{ width: 24, height: 24,top: 8, }}></Image>
                                </View>
                        </View>
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
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    liste: {
        marginTop: 30,
        gap: 25,
    },

    produit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    plus: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'green',
        width: 30,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FormScreen5;