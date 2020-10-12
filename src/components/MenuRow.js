import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MenuRow = (props) => {
  return (
    <View style={[{backgroundColor: props.color}, styles.container, ]}>
      <View style={{flex: 1}}>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={[styles.text, {fontWeight:"400", fontSize:16}]}>{props.desc}</Text>
      </View>
      {props.isActive ? <Text style={[styles.text, {fontSize:15}]}>Not Active</Text> : null}
    </View>
  );
};

export default MenuRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin:10,
    padding:10,
    borderRadius:8,
    marginVertical:20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"black",
    margin:3

  },
});
