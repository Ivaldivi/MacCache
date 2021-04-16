//https://reactnative.dev/docs/textinput#content
//https://stackoverflow.com/questions/52887815/how-do-i-redirect-user-to-another-page-after-submit-the-form-in-react-js/52890618
import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { userMap2 } from './UserMap2';


const Stack = createStackNavigator();
const NavigateStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='WorkingMap'
          component={WorkingMap}
          options={{ title: 'WorkingMap' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const WorkingMap = ({ navigation }) => {

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
      <TextInputGoal/>
      <userMap2/>
      <NavigateStack/>

    </View>
  )
}

const TextInputGoal = () => {
  // const [text, onSubmitEdit] = React.useCallback(null);
  const [value, onChangeText] = React.useState('Enter the name of the cache you want to go to!');  
  
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        returnKeyType='go'
        clearButtonMode = 'while-editing'
        onChangeText={text => onChangeText(text)}
        enablesReturnKeyAutomatically = {true}
        value={value}
        onSubmitEditing={navigation.navigate('WorkingMap')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default TextInputGoal;
