import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import ScottMarker from './ScottMarker';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const userMap2 = props =>{
    return(
        <View style = {styles.mapContainer}>
            <MapView
                initialRegion={{
                    latitude: (44.94000),
                    longitude: (-93.1746),
                    latitudeDelta: 0.0922,
                    longitudeDelta:  0.0922 * ASPECT_RATIO,
                  }}
                region={props.userLocation}
                showsUserLocation = {true}
                style ={styles.map}>
                <ScottMarker coordinates = {{latitude: 44.9379, longitude: -93.168869019}} title = "Snelling and Grand Cache"/>
                <ScottMarker coordinates = {{latitude: 44.9416, longitude: -93.1974}} title = "River Cache"/>
                <ScottMarker coordinates = {{latitude:44.934412433560745, longitude: -93.1777188451171}} title = "The Tap Cache"/>
                <ScottMarker coordinates = {{latitude:44.94031596574141, longitude: -93.16657303880767}} title = "BreadSmith Cache"/>                  
                <ScottMarker coordinates = {{latitude:44.941529947250395, longitude: -93.18443394690537}} title = "The Rest Cache" />                  
                    {/* Takes the user to a bench on summit : ) */}

                </MapView>
        </View>
    );
};
const styles = StyleSheet.create({
    mapContainer: {
        width: 350,
        height: 600, 
        alignSelf: 'center', 
        marginBottom: 20,
        marginTop: 20
    }, 
    map: {
        width: '100%', 
        height: '100%', 
        marginBottom: 0, 
        alignSelf: 'center'
    }
});

export default userMap2;