import { View, StatusBar } from 'react-native';
 import React, { Component } from 'react';

 export default class Navbar extends Component {
   render() {
     return (
 <View style={styles.backgroundStyle}>
       <StatusBar />
       <View style={{ flexDirection: 'row' }}>
     </View>
 </View>
     );
   }

 }
 const styles = {
   backgroundStyle: {
     backgroundColor: 'transparent'
   }
 };
