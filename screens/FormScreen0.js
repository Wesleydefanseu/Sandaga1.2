import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
// import { TextInput } from 'react-native-web';

const FormScreen0 = () => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <View>
                    <Image source={require('../assets/prev_26px.png')} style={{ width: 30, height: 30, }}></Image>
                </View>
                <View>
                    <Image source={require('./58.jpg')} style={{ width: 40, height: 40, borderRadius: 50, }}></Image>
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 28, fontWeight: '700', }}>Discover Seasonal</Text>
                <Text style={{ fontSize: 28, fontWeight: '700', }}>Fruits and Vegetables</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 30, }}>
                <View style={{ width: 80, height: 30, backgroundColor: 'pink', borderRadius: 30, }}>
                    <Text style={{ left: 12, top: 5, }}>Orange</Text>
                </View>
                <Text>Grape</Text>
                <Text>Pineapple</Text>
                <Text>Strawberry</Text>
            </View>

            <ScrollView horizontal={true} style={{ marginTop: 5 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 15, }}>
                    <View style={{ width: 250, height: 280, borderRadius: 30, backgroundColor: '#ffcc80', top: 80, }}>
                        <View>
                            <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, left: 195, top: 15, }}></Image>
                        </View>
                        <View style={styles.title}>
                            <Image source={require('./orange.jpg')} style={{ width: 100, height: 100, marginLeft: 64, top: 40, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ top: 55, left: 20, }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Orange</Text>
                                <View style={{ width: 80, height: 35, backgroundColor: 'orange', borderRadius: 30, top: 15, }}>
                                    <Text style={{color:'white',left:20,top:8,}}>ADD</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: 250, height: 280, borderRadius: 30, backgroundColor: '#B0C4DE', top: 80, }}>
                        <View>
                            <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, left: 195, top: 15, }}></Image>
                        </View>
                        <View style={styles.title}>
                            <Image source={require('./raisin.jpg')} style={{ width: 100, height: 100, marginLeft: 64, top: 40, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ top: 55, left: 20, }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Raisin</Text>
                                <View style={{ width: 80, height: 35, backgroundColor: 'violet', borderRadius: 30, top: 15, }}>
                                    <Text style={{color:'white',left:20,top:8,}}>ADD</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 250, height: 280, borderRadius: 30, backgroundColor: '#B0F2B6', top: 80, }}>
                        <View>
                            <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, left: 195, top: 15, }}></Image>
                        </View>
                        <View style={styles.title}>
                            <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.43_a35a1b21.jpg')} style={{ width: 70, height: 100, marginLeft: 64, top: 40, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ top: 55, left: 20, }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Broccoli</Text>
                                <View style={{ width: 80, height: 35, backgroundColor: 'green', borderRadius: 30, top: 15, }}>
                                    <Text style={{color:'white',left:20,top:8,}}>ADD</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 250, height: 280, borderRadius: 30, backgroundColor: 'pink', top: 80, }}>
                        <View>
                            <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, left: 195, top: 15, }}></Image>
                        </View>
                        <View style={styles.title}>
                            <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.45_604be50b.jpg')} style={{ width: 100, height: 100, marginLeft: 64, top: 40, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ top: 55, left: 20, }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Tomate</Text>
                                <View style={{ width: 80, height: 35, backgroundColor: '#e57373', borderRadius: 30, top: 15, }}>
                                    <Text style={{color:'white',left:20,top:8,}}>ADD</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 15, top: 330, right: 1040, }}>
                    <View style={{ width: 250, height: 150, borderRadius: 30, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', top: 80, borderWidth: 1, borderColor: 'orange', }}>
                        <View>
                            <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, left: 195, top: 15, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', left: 40, }}>
                            <Image source={require('./orange.jpg')} style={{ width: 70, height: 70, top: 40, right: 70, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ top: 55, right: 80, }}>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>Broccoli</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>Xender Shop</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>2356 Totrican street</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>9AM - 7PM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: 250, height: 150, borderRadius: 30, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', top: 80, borderWidth: 1, borderColor: 'orange', }}>
                        <View>
                            <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, left: 195, top: 15, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', left: 45, }}>
                            <Image source={require('./raisin.jpg')} style={{ width: 70, height: 70, top: 40, right: 70, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ top: 55, right: 80, }}>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>Broccoli</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>Xender Shop</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>2356 Totrican street</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>9AM - 7PM</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 250, height: 150, borderRadius: 30, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', top: 80, borderWidth: 1, borderColor: 'orange', }}>
                        <View>
                            <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, left: 195, top: 15, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', left: 50, }}>
                            <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.43_a35a1b21.jpg')} style={{ width: 70, height: 70, top: 40, right: 70, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ top: 55, right: 80, }}>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>Broccoli</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>Xender Shop</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>2356 Totrican street</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>9AM - 7PM</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 250, height: 150, borderRadius: 30, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', top: 80, borderWidth: 1, borderColor: 'orange', }}>
                        <View>
                            <Image source={require('./heart_64px.png')} style={{ width: 30, height: 30, left: 195, top: 15, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', left: 10, }}>
                            <Image source={require('./WhatsApp Image 2023-12-15 à 21.22.45_604be50b.jpg')} style={{ width: 70, height: 70, top: 40, right: 20, }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ top: 55, right: 80, }}>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>Broccoli</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>Xender Shop</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>2356 Totrican street</Text>
                                <Text style={{ fontFamily: 'arial', fontSize: 12, fontWeight: 'bold', marginLeft: 80, }}>9AM - 7PM</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
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

});

export default FormScreen0;