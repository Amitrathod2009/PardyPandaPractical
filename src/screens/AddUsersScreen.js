import React, { useState } from 'react';
import { View, StyleSheet, FlatList ,Text} from 'react-native';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/usersSlice';

const AddUsersScreen = () => {
  const [visible, setVisible] = useState(false);
  const [newUser, setNewUser] = useState('');
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const saveUser = () => {
    if (newUser) {
      dispatch(addUser(newUser));
      setNewUser('');
      setVisible(false);
    }
  };

  return (
    <View style={[styles.container]}>
      {users.length > 0 && <Text style={[styles.title]}>Added UserList :</Text>}
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
        (
          <View style={[styles.row]}>
            <Text style={[styles.rowText]}>{item}</Text>
          </View>
        )
        }
        ListEmptyComponent={
          <Text style={[styles.emptyText]}>No users added yet....Please add a user.</Text>
        }
      />
      <Button
        mode="contained"
        onPress={() => { setVisible(true); }}
        style={[styles.addUserBtn]}
      >
        Add User
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title style={[styles.DialogTitle]}>Add User</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="User Name"
              value={newUser}
              onChangeText={setNewUser}
              style={[styles.textInput]}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={saveUser}>Save</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:16,
    color:'#333',
  },
  addUserBtn: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#6851a4',
    borderRadius: 10,
  },
  rowText: {
    color: '#6851a4',
    fontWeight: 'bold',
  },
  emptyText:{
    textAlign:'center',
    marginTop:20,
    color:'#919091',
    fontStyle:'italic',
    fontSize:18,
  },
  DialogTitle:{
    fontSize:20,
    fontWeight:'bold',
  },
  textInput :{
    marginBottom:15,
  },


});
export default AddUsersScreen;
