import React from 'react';
import { View, ActivityIndicator } from 'react-native';

function Spinner() {
  return (
    <View style={styles.contentContainerStyle}>
      <ActivityIndicator color='blue'/>
    </View>
  );
};

const styles = {
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Spinner;
