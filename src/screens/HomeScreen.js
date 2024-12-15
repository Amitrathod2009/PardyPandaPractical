import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <View style={[styles.container]}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
        (
          <View style={[styles.card]}>
            <Text style={[styles.title]}>Title : {item.title}</Text>
            <Text style={[styles.subText]}>Description : {item.description}</Text>
            <Text  style={[styles.subText]}>Assigned To : {item.assignedUser}</Text>
          </View>
        )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 10,
    padding: 16,
    backgroundColor: '#f0eded',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#6851a4',
    elevation:8,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
  },
  subText:{
    fontSize:18,
    fontWeight:'medium',
  },

});

export default HomeScreen;
