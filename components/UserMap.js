import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const userMap = props =>{
   
    return(
        <View style = {styles.mapContainer}>
            <MapView
                initialRegion={{
                    latitude: (44.94000),
                    longitude: (-93.1746),
                    latitudeDelta: 0.0725,
                    longitudeDelta: 0.0420,
                  }}
                region={props.userLocation}
                showsUserLocation = {true}
                style ={styles.map}>
                    <MapView.Marker 
                        coordinate={{latitude: 44.9379,
                            longitude: -93.168869019}}
                            title={'CC Cache'}
                            key={Marker.snellAndGrand}
                            image={require("./scot.png")}
                          />
                    <MapView.Marker
                        coordinate ={{latitude: 44.9416,
                            longitude: -93.1974}}
                            title={'River Cache'}
                            key={Marker.river}
                            image={require("./scot.png")}
                            />
                     <MapView.Marker
                        coordinate ={{latitude:44.934412433560745,
                            longitude: -93.1777188451171}}
                            title={'The Tap Cache'}
                            key={Marker.river}
                            image={require("./scot.png")}
                            />
                    <MapView.Marker
                        coordinate ={{latitude:44.94031596574141, 
                            longitude: -93.16657303880767}}
                            title={'BreadSmith Cache'}
                            key={Marker.river}
                            image={require("./scot.png")}
                            />
                    <MapView.Marker
                        coordinate ={{latitude:44.941529947250395, 
                            longitude: -93.18443394690537}}
                            title={'The Rest Cache'}
                            key={Marker.river}
                            image={require("./scot.png")}
                            /> 
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
  {/*google map api, having trouble making map fit between markers. 
      Keeps track of user location This is Julia's Old Map Code: ) */}
      {/* <MapView style={styles.map} ref={ref => {
        this.map = ref;
      }} showsUserLocation={true} initialRegion={{
        latitude: (44.937950134),
        longitude: (-93.168869019),
        latitudeDelta: (44.937950134),
        longitudeDelta: (93.168869019)
      }}
        initialRegion={this.state.region}
      > */}

        {/*marker with goal location*/}
        {/* <MapView.Marker
          coordinate={{
            latitude: 44.937950134,
            longitude: -93.168869019
          }}
          title={'Find Me'} identifier={'mk1'}
          image={
            require("./assets/scot.png")}
        />
        <MapView.Marker draggable
          coordinate={{
            latitude: 44.9416,
            longitude: -93.1974
          }}
          title={'Place Me (no purpose testing)'} identifier={'mk2'}
          onDragEnd={(e) => { console.log('dragEnd', e.nativeEvent.coordinate) }}
        /> */}

      {/* </MapView> */}

export default userMap;