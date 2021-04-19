
//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { Text, Button, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Callout } from 'react-native-maps';
import { Grid, Col, Row } from "react-native-easy-grid";
import { Magnetometer } from 'expo-sensors';
import { apisAreAvailable } from 'expo';
import { Component } from 'react';
import UserMap from './components/UserMap';
import UserMap2 from './components/UserMap2';
import GoalCoords from './components/GoalCoords';
// import TextInputGoal from './components/TextInputGoal';
import { render } from 'react-dom';



const Stack = createStackNavigator();
function App() {

  return (
    <NavigateStack />
  )
}

const NavigateStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='home'
          component={HomeScreen}
          options={{ title: 'Home' }} />
        <Stack.Screen
          name='map'
          component={MapScreen}
          options={{ title: 'Map' }} />
        <Stack.Screen
          name='compass'
          component={CompassScreen}
          options={{ title: 'Compass' }} />
          <Stack.Screen
          name='chooseGoal'
          component={ChooseGoalScreen}
          options={{ title: 'Choose Goal Map' }} />
          <Stack.Screen
          name='WelcomeScreen'
          component={WelcomeScreen}
          options={{ title: 'Mac Cache' }} />
          <Stack.Screen
          name='AboutPage'
          component={AboutPage}
          options={{ title: 'About' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 44.9379;
const LONGITUDE = -93.1691;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const MapScreen = ({ navigation }) => {
  this.state = {
    region: {
      latitude: 44.9379,
      longitude: -93.1691,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * ASPECT_RATIO,
    },
  };

  return (
    <View style={styles.container}>
      <UserMap2/>     
      {/*TRYING TO SHOW USER Coordinates*/}
      <View style={[styles.bubble, styles.latlng]}>
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text style={styles.centeredText}>Click to Find Your Coordinates</Text>
          <Text style={styles.centeredText, { fontWeight: 'bold' }}>{this.state.location}</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Compass Screen"
        onPress={() =>
          navigation.navigate('compass')} />
      <Button
        title="Welcome Screen"
        onPress={() =>
          navigation.navigate('WelcomeScreen')} />
      <Button
        title="Map Screen"
        onPress={() =>
          navigation.navigate('map')} />
    </View>

  )
}
const AboutPage = ({ navigation }) => {
  return (
    <View>
      <Text>Hello!</Text>
    </View>

  )
}
const ChooseGoalScreen = ({ navigation }) => {
  this.state = {
    region: {
      latitude: 44.9379,
      longitude: -93.1691,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * ASPECT_RATIO,
    },
  };
  return (
    <View>
      <UserMap2/>
    </View>
  )
}

const WelcomeScreen = ({ navigation }) => {
  return (

    <View style = {styles.welcomePg}>
      <View style={styles.imgz}>
          <Image source={require('./components/macCache.png')}/>
      </View>
      <View style = {styles.WelcomeB}>
          <Button 
            style = {styles.WelcomeB}
            title = "Start"
            color = '#fff'
            onPress={() =>
              navigation.navigate('map')}/>
        </View>
        <View style = {styles.WelcomeB}>
          <Button 
            style = {styles.WelcomeB}
            title="About"
            color = '#fff'
            onPress={() =>
              navigation.navigate('AboutPage')} />
        </View>
          
      
      
    </View>
  )
}

const CompassScreen = ({ navigation }) => {

  const [subscription, setSubscription] = useState(null);
  const [magnetometer, setMagnetometer] = useState(0);
  this.state = {
    location: null
  };

  useEffect(() => {
    _toggle();
  }, []);

  const _toggle = () => {
    if (subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener((data) => {
        setMagnetometer(_angle(data));
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    subscription = null;
  };

  const _angle = (magnetometer) => {
    if (magnetometer) {
      let { x, y, z } = magnetometer;

      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      }
      else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }

    return Math.round(angle);
  };

  const _direction = (degree) => {
    if (degree >= 22.5 && degree < 67.5) {
      return 'NE';
    }
    else if (degree >= 67.5 && degree < 112.5) {
      return 'E';
    }
    else if (degree >= 112.5 && degree < 157.5) {
      return 'SE';
    }
    else if (degree >= 157.5 && degree < 202.5) {
      return 'S';
    }
    else if (degree >= 202.5 && degree < 247.5) {
      return 'SW';
    }
    else if (degree >= 247.5 && degree < 292.5) {
      return 'W';
    }
    else if (degree >= 292.5 && degree < 337.5) {
      return 'NW';
    }
    else {
      return 'N';
    }
  };

  // (By default 0° starts from the right of the device.)
  const _degree = (magnetometer) => {
    return magnetometer - 90 >= 0 ? magnetometer - 90 : magnetometer + 271;
  };


  return (

    <Grid style={{ backgroundColor: '#fff' }}>
      <Row style={{ alignItems: 'center' }} size={.9}>
        <Col style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: 'grey',
              fontSize: height / 26,
              fontWeight: 'bold'
            }}>
            {_direction(_degree(magnetometer))}
          </Text>
        </Col>
      </Row>

      <Row style={{ alignItems: 'center' }} size={.1}>
        <Col style={{ alignItems: 'center' }}>
          <View style={{ position: 'absolute', width: width, alignItems: 'center', top: 0 }}>
            <Image source={require('./assets/arrow.png')} style={{
              height: height / 26,
              resizeMode: 'contain'
            }} />
          </View>
        </Col>
      </Row>

      <Row style={{ alignItems: 'center' }} size={2}>
        <Text style={{
          color: 'grey',
          fontSize: height / 27,
          width: width,
          position: 'absolute',
          textAlign: 'center'
        }}>
          {_degree(magnetometer)}°
        </Text>

        <Col style={{ alignItems: 'center' }}>

          <Image source={require("./assets/compass_bg_copy.png")} style={{
            height: width - 80,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'contain',
            transform: [{ rotate: 360 - magnetometer + 'deg' }]
          }} />

        </Col>
      </Row>

      <Row style={{ alignItems: 'center' }} size={1}>
        <Col style={{ alignItems: 'center' }}>
          <Text style={{ color: 'grey' }}>Find: 44.9379, -93.1691</Text>
          {/* <View style={[styles.bubble, styles.latlng]}>
            <TouchableOpacity onPress={this.findCoordinates}>
              <Text style={styles.centeredText}>Click to Find Your Coordinates</Text>
              <Text style={styles.centeredText, { fontWeight: 'bold' }}>{this.state.location}</Text>
            </TouchableOpacity>
          </View> */}
        </Col>
      </Row>

    </Grid>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },

  bubble: {
    backgroundColor: 'rgba(0, 0, 255, 0.3)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    alignContent: 'center'
  },
  centeredText: { textAlign: 'center' },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  imgz: {
    width: 375,
    height: 375,
    alignContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#214683', 
    marginBottom: -10
  },
  welcomePg: {
    alignItems: 'center',
    backgroundColor: `#214683`,
    height: Dimensions.get('window').height,
    flex: 1,
    justifyContent: 'flex-start',
    
  },
  WelcomeB: {
      backgroundColor: 'rgba(223, 108, 22, .9)',
      paddingHorizontal: 18,
      paddingVertical: 10,
      borderRadius: 20,
      alignContent: 'center', 
      color: 'white',
      marginBottom: 45,
      display: 'flex'
    }
});

export default App;

